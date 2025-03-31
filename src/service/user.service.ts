import { CreateUserDto } from "../dto/create-user.dto";
import { GetUserByIdDto } from "../dto/get-user-by-id.dto";
import User from "../model/user.model";
import bcrypt from "bcryptjs";

export class UserService {
  constructor() {}
  async getAllUser() {
    const findAllUser = await User.find().select("-password -refreshtokenDB");
    return {
      message: "get all user successs!",
      data: findAllUser,
    };
  }
  async getUserById(payload: GetUserByIdDto) {}
  async createUser(Data: CreateUserDto) {
    const { username, email, password } = Data;
    if (!username) throw new Error("vui lòng điền name");
    if (!email) throw new Error("vui lòng điền email");
    if (!password) throw new Error("vui lòng điền password");
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashpassword });
    await newUser.save();
    return {
      message: "Create user success",
      data: newUser,
    };
  }
}
