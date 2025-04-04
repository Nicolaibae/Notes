console.log("router");
import { Router } from "express";

import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";
const router = Router();

const userController = new UserController();

router.get("/getAllUser", userController.getAllUser);
// router.get("/getUserById/:id", userController.getUserById);
// router.post("/createUser", userController.createUser);
// router.post("/updateUser/:id", userController.updateUser);
// router.delete("/deleteUser/:id", userController.deleteUser);

export default router;
