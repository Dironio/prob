import { UpdatedUserDto } from "../@types/dto/user.dto";
import { CreateUserDao, FindUserDao } from "../../src/@types/dao/user.dao";
import pool from "../Pool";
import sqlGenerator from "../dal/sqlGenerator";

class UserDal {

    async create(createUserDao: CreateUserDao) {
      const {insertString, insertValues} = sqlGenerator.getInsertString(createUserDao)
        const result = await pool.query(`
        INSERT INTO users 
        ${insertString}
          RETURNING * `,
          insertValues);
        return sqlGenerator.camelcaseKeys(result.rows)[0]
    }

    async getAll (findUserDao: FindUserDao) {
      const {conditionString, conditionValues} = sqlGenerator.getConditionString(findUserDao)
      const allUsers = await pool.query(
        `SELECT  users.*, roles.name as role
        FROM users
        JOIN roles on roles.id = users.role_id
        ${conditionString}`
      , conditionValues)
      return sqlGenerator.camelcaseKeys(allUsers.rows)          
    }

    async getOne (userId: number) {
      const {conditionString, conditionValues} = sqlGenerator.getConditionString({'users.id':userId})
     
      console.log( 
        `SELECT users.*, roles.name as role 
      FROM users
      JOIN roles on roles.id = users.role_id
      ${conditionString}
      `,conditionValues)

      const oneUser = await pool.query(
        `SELECT users.*, roles.name as role 
        FROM users
        JOIN roles on roles.id = users.role_id
        ${conditionString}
        `, conditionValues
      )
      return sqlGenerator.camelcaseKeys(oneUser.rows[0])
    }

    async update (updatedUserDto: UpdatedUserDto) {
      const { id, ...other } = updatedUserDto
      const {setString,setValues} = sqlGenerator.getSetString(other,2);
      const updatedUser = await pool.query(`
      UPDATE
        users
      SET
      ${setString}
      WHERE
        id = $1
      RETURNING
        *
      `,[id, ...setValues]
      )

      // console.log(`
      // UPDATE
      //   users
      // SET
      // ${setString}
      // WHERE
      //   id = $1
      // RETURNING
      //   *
      // `)

      return updatedUser.rows[0]
    }

    async delete (userId: number) {

      const deletedUser = await pool.query(
        `
        DELETE FROM users
        where id=$1
        RETURNING 
        *
        `,[userId]
      )
      return sqlGenerator.camelcaseKeys(deletedUser.rows[0])
    }
}

const userDal = new UserDal();

export default userDal;