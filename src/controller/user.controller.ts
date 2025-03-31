
import { UserService } from "../service/user.service";
import { Request, Response } from "express";

export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  async getAllUser(req: Request, res: Response) {
    try {
      const result = await this.userService.getAllUser();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }
  async getUserById(req: Request, res: Response){
    try {
        const userId = req.params.id
        if(!userId) throw new Error("ID not found")
        const result = await this.userService.getUserById(userId)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json((error as Error).message);
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const result = this.userService.createUser({username, email, password });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json((error as Error).message);
    }
  }
}
