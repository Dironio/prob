import { UpdatedUserDto } from "src/@types/dto/user.dto";
import { CreateUserDao } from "../../src/@types/dao/user.dao";
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

    async getAll () {
      const allUsers = await pool.query(
        `SELECT * FROM users`
      )
      return allUsers.rows
    }

    async getOne (userId: number) {
      // const {insertString, insertValues} = sqlGenerator.getInsertString(createUserDao)
      const oneUser = await pool.query(
        `SELECT * FROM users
        where id=$1`,[userId]
      )
      return oneUser.rows[0]
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
      return deletedUser.rows[0]
    }
}

const userDal = new UserDal();

export default userDal;