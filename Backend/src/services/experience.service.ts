import experienceDal from "../dal/experience.dal";

class ExperienceService {
    async getAll () {
        return await experienceDal.getAll()
    }
}

const experienceService = new ExperienceService();

export default experienceService