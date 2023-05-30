import vacancyDal from "../dal/vacancy.dal";
import { CreateVacancyDto} from "../dto/vacancy.dto";

class VacancyService {
    async create (createVacancyDto: CreateVacancyDto) {
        return await vacancyDal.create(createVacancyDto)
    }

    async getAll () {
        return await vacancyDal.getAll()
    }
}

const vacancyService = new VacancyService();

export default vacancyService