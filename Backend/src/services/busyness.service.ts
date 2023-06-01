import busynessDal from "../dal/busyness.dal";

class BusynessService {
    async getAll () {
        return await busynessDal.getAll()
    }
}

const busynessService = new BusynessService();

export default busynessService