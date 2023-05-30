import { CreateVacancyDao } from "../../src/@types/dao/vacancy.dao";
import pool from "../Pool";
import sqlGenerator from "../dal/sqlGenerator";

class VacancyDal {

    async create(createVacancyDao: CreateVacancyDao) {
      const {insertString, insertValues} = sqlGenerator.getInsertString(createVacancyDao)
        const result = await pool.query(`
        INSERT INTO vacancies 
        ${insertString}
          RETURNING * `,
          insertValues);
        return sqlGenerator.camelcaseKeys(result.rows)[0]
    }

    async getAll () {
      const allVacancies = await pool.query(
        `SELECT * FROM vacancies`
      )
      return allVacancies.rows
    }
}

const vacancyDal = new VacancyDal();

export default vacancyDal;