// import { UserService } from "../service/user.service";
import { Request, Response } from "express";

import { UserService } from "../service/user.service";

// export class UserController {
//   #userService: UserService;
//   constructor(userServiceProps: UserService) {
//     console.log("userServiceProps: ", userServiceProps);
//     this.#userService = new UserService();
//     console.log("this.userService: ", this.#userService);
//     console.log("this.: ", this);
//   }
//   async init(req: Request, res: Response) {
//     console.log("this.init - 2", this);
//   }
// async getAllUser(req: Request, res: Response) {
//   try {
//     console.log("this.userService - 2", this);
//     const result = await this.#userService.getAllUser();
//     console.log("result", result);
//     res.status(200).json(result);
//   } catch (error) {
//     console.log("getAllUser - error: ", error);
//     res.status(500).json((error as Error).message);
//   }
// }
//   async getUserById(req: Request, res: Response) {
//     try {
//       const userId = req.params.id;
//       if (!userId) throw new Error("ID not found");
//       const result = await this.#userService.getUserById({ id: userId });
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json((error as Error).message);
//     }
//   }
//   async createUser(req: Request, res: Response) {
//     try {
//       const { username, email, password } = req.body;
//       const result = this.#userService.createUser({
//         username,
//         email,
//         password,
//       });
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(500).json((error as Error).message);
//     }
//   }
//   async updateUser(req: Request, res: Response) {}
//   async deleteUser(req: Request, res: Response) {}
// }

export class UserController {
  #userService: UserService;
  constructor() {
    this.#userService = new UserService();
    console.log("this in constructor:", this.#userService);
    this.getAllUser = this.getAllUser.bind(this); // bữa sau
  }

  async getAllUser(req: Request, res: Response) {
    try {
      console.log("this.userService - 2", this);
      const result = await this.#userService.getAllUser();
      console.log("result", result);
      res.status(200).json(result);
    } catch (error) {
      console.log("getAllUser - error: ", error);
      res.status(500).json((error as Error).message);
    }
  }
}
