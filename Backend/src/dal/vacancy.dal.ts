import { CreateVacancyDao, FindVacancyDao, ResponsesVacancyDao, UpdatedVacancyDao } from "../../src/@types/dao/vacancy.dao";
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

    async getAll (findVacancyDao: FindVacancyDao) {
      const {conditionString, conditionValues} = sqlGenerator.getConditionString(findVacancyDao)
      const allVacancies = await pool.query(
        `SELECT vacancies.*, busyness.name as busyness, experience.name as experience
        FROM vacancies
        join busyness on busyness.id = vacancies.busyness_id
        join experience on experience.id = vacancies.experience_id
        ${conditionString}
        `,
        conditionValues)
        return sqlGenerator.camelcaseKeys(allVacancies.rows)
      }

    async getOne (vacancyId: number) {
      const {conditionString, conditionValues} = sqlGenerator.getConditionString({'vacancies.id':vacancyId})
      
      const oneVacancy = await pool.query(
        `SELECT vacancies.*, busyness.name as busyness, experience.name as experience 
        FROM vacancies
        join busyness on busyness.id = vacancies.busyness_id
        join experience on experience.id = vacancies.experience_id
        ${conditionString}
        `, conditionValues
      )
      return sqlGenerator.camelcaseKeys(oneVacancy.rows[0])
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
      return sqlGenerator.camelcaseKeys(updatedVacancy.rows[0])
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
      return sqlGenerator.camelcaseKeys(deletedVacancy.rows[0])
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

    async getResponse (userId?: number, vacancyId?: number) {
      const tableName = userId ? 'vacancies' : 'users'
      const {conditionString, conditionValues} = sqlGenerator.getConditionString({'users.id' : userId, 'vacancies.id' : vacancyId})
      console.log(`
      SELECT distinct vacancies.* FROM responses
      JOIN users ON users.id = responses.user_id
      JOIN vacancies ON vacancies.id = responses.vacancy_id
      ${conditionString}
      `, conditionValues)
      const responses = await pool.query (
        `
        SELECT distinct ${tableName}.* FROM responses
        JOIN users ON users.id = responses.user_id
        JOIN vacancies ON vacancies.id = responses.vacancy_id
        ${conditionString}
        `, conditionValues
      )
      return sqlGenerator.camelcaseKeys(responses.rows)
    }
}

const vacancyDal = new VacancyDal();

export default vacancyDal;