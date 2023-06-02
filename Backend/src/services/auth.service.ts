import { TokenPayload } from "../@types/models/token.model";
import { CreateUserDto } from "../@types/dto/user.dto";
import { CreateUserDb, User } from "../@types/models/user.model";
import userService from "./user.service";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

class AuthService {
    async singup (createUserDto: CreateUserDto) {
        const candidate: User[] = await userService.getAll({email: createUserDto.email})
        if (candidate[0]) {
            throw new Error('Zanyato')
        }
        
        const hashPassword: string = await bcrypt.hash(createUserDto.password, 3)
        const createUserDb: CreateUserDb = {
            ...createUserDto,
            password: hashPassword
        }
        const newUser: User = await userService.create(createUserDb)

        const tokenPayload: TokenPayload = {
            id: newUser.id,
            email: newUser.email,
            role: newUser.role
        }

        const jwtToken: string = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, { expiresIn: '30d' })

        return {user: newUser, token: jwtToken}
    }
    
    async login () {
        // const  = 
        
        return
    }
}

const authService = new AuthService()

export default authService