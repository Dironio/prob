import pool from "src/Pool";
import userDal from "../dal/user.dal";
import { CreateUserDto} from "../dto/user.dto";

class UserService {
    async create (createUserDto: CreateUserDto) {
        return await userDal.create(createUserDto)
    }

    async getAll () {
        return await userDal.getAll()
    }
}

const userService = new UserService();

export default userService