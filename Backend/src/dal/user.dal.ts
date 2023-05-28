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
}

const userDal = new UserDal();

export default userDal;