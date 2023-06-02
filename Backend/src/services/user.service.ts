import pool from "src/Pool";
import userDal from "../dal/user.dal";
import { CreateUserDto} from "../dto/user.dto";
import { UpdatedUserDto } from "../@types/dto/user.dto";
import { FindUserDao } from "../@types/dao/user.dao";

class UserService {
    async create (createUserDto: CreateUserDto) {
        return await userDal.create(createUserDto)
    }

    async getAll (findUserDao: FindUserDao) {
        return await userDal.getAll(findUserDao)
    }

    async getOne (userId: number) {
        return await userDal.getOne(userId)
    }

    async update (updatedUserDto: UpdatedUserDto) {
        return await userDal.update(updatedUserDto)
    }

    async delete (userId: number) {
        return await userDal.delete(userId)
    }
}

const userService = new UserService();

export default userService