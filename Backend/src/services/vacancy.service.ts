import { FindVacancyDao } from "src/@types/dao/vacancy.dao";
import { CreateVacancyDto, ResponsesVacancyDto, UpdatedVacancyDto } from "../@types/dto/vacancy.dto";
import vacancyDal from "../dal/vacancy.dal";

class VacancyService {
    async create (createVacancyDto: CreateVacancyDto) {
        return await vacancyDal.create(createVacancyDto)
    }

    async getAll (findVacancyDao: FindVacancyDao) {
        return await vacancyDal.getAll(findVacancyDao)
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

    async getResponse (userId?: number, vacancyId?: number) {
        return await vacancyDal.getResponse(userId, vacancyId)
    }

    async stats (vacancyId?:number) {
        return await vacancyDal.stats(vacancyId)
    }
}

const vacancyService = new VacancyService();

export default vacancyService