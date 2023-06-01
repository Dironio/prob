import { CreateVacancyDao, ResponsesVacancyDao, UpdatedVacancyDao } from "../../src/@types/dao/vacancy.dao";
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
        `SELECT vacancies.*, busyness.name as busyness, experience.name as experience
        FROM vacancies
        join busyness on busyness.id = vacancies.busyness_id
        join experience on experience.id = vacancies.experience_id
        `
        )
        return allVacancies.rows
      }

    async getOne (vacancyId: number) {
      // const {insertString, insertValues} = sqlGenerator.getInsertString(createUserDao)
      
      const oneVacancy = await pool.query(
        `SELECT vacancies.*, busyness.name as busyness, experience.name as experience 
        FROM vacancies
        join busyness on busyness.id = vacancies.busyness_id
        join experience on experience.id = vacancies.experience_id
        
        where vacancies.id=$1`,[vacancyId]
      )
      return oneVacancy.rows[0]
    }

    async update (updatedVacancyDao: UpdatedVacancyDao) {
      const { id, ...other } = updatedVacancyDao
      const {setString,setValues} = sqlGenerator.getSetString(other,2);
      const updatedVacancy = await pool.query(`
      UPDATE
        vacancies
      SET
      ${setString}
      WHERE
        id = $1
      RETURNING
        *
      `,[id, ...setValues]
      )
      return updatedVacancy.rows[0]
    }

    async delete (vacancyId: number) {
      const deletedVacancy = await pool.query(
        `
        DELETE FROM vacancies
        where id=$1
        RETURNING 
        *
        `,[vacancyId]
      )
      return deletedVacancy.rows[0]
    }

    async response (responsesVacancyDao: ResponsesVacancyDao) {
      console.log(responsesVacancyDao)
      const {insertString, insertValues} = sqlGenerator.getInsertString(responsesVacancyDao)
      const response = await pool.query(
        `
        INSERT INTO responses
        ${insertString}
        RETURNING *
        `, insertValues)
      return sqlGenerator.camelcaseKeys(response.rows)[0]
    }

    async getResponse () {
      const responses = await pool.query (
        `
        SELECT * FROM responses
        JOIN users ON users.id = responses.users_id
        JOIN vacancies ON vacancies.id = responses.vacancies_id

        `
      )
      return responses.rows[0]
    }
}

const vacancyDal = new VacancyDal();

export default vacancyDal;