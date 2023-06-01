import { CreateVacancyDto, ResponsesVacancyDto, UpdatedVacancyDto } from "../@types/dto/vacancy.dto";
import vacancyDal from "../dal/vacancy.dal";

class VacancyService {
    async create (createVacancyDto: CreateVacancyDto) {
        return await vacancyDal.create(createVacancyDto)
    }

    async getAll () {
        return await vacancyDal.getAll()
    }

    async getOne (vacancyId: number) {
        return await vacancyDal.getOne(vacancyId)
    }

    async update (updatedVacancyDto: UpdatedVacancyDto) {
        return await vacancyDal.update(updatedVacancyDto)
    }

    async delete (vacancyId: number) {
        return await vacancyDal.delete(vacancyId)
    }

    async response (responsesVacancyDto: ResponsesVacancyDto) {
        return await vacancyDal.response(responsesVacancyDto)
    }

    async getResponse () {
        return await vacancyDal.getResponse()
    }
}

const vacancyService = new VacancyService();

export default vacancyService