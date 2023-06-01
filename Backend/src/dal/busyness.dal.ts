import pool from "../Pool";

class BusynessDal {
    async getAll () {
        const allBusyness = await pool.query(
          `SELECT * FROM busyness`
        )
        return allBusyness.rows
      }
}

const busynessDal = new BusynessDal()

export default busynessDal