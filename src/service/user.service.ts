import User from "../model/user.model";
import bcrypt from "bcryptjs"

interface CreateUserDto {
    username: string;
    email: string;
    password: string;
}

export class UserService {
    async getAllUser() {
        const findAllUser = await User.find();
        return {
            message: "get all user successs!",
            data: findAllUser,
        };
    }
    async getUserById(Data: CreateUserDto){
        const {id} = Data

    }
    async createUser(Data: CreateUserDto) {
        const { username, email, password } = Data;
        if (!username) throw new Error("vui lòng điền name")
        if (!email) throw new Error("vui lòng điền email")
        if (!password) throw new Error("vui lòng điền password")
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, email, password: hashpassword })
        await newUser.save()
        return {
            message: "Create user success",
            data: newUser,
        }
    }
}