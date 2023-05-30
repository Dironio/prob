import pool from "src/Pool";
import userDal from "../dal/user.dal";
import { CreateUserDto} from "../dto/user.dto";
import { UpdatedUserDto } from "src/@types/dto/user.dto";

class UserService {
    async create (createUserDto: CreateUserDto) {
        return await userDal.create(createUserDto)
    }

    async getAll () {
        return await userDal.getAll()
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