import pool from "../Pool";

class ExperienceDal {
    async getAll () {
        const allExperience = await pool.query(
          `SELECT * FROM experience`
        )
        return allExperience.rows
      }
}

const experienceDal = new ExperienceDal()

export default experienceDal