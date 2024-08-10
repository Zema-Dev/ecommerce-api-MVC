import express from "express";
// import {
//   getUsers,
//   getUserById,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/userController";
import UserController from "../controllers/userController";

const UserRouter = express.Router();

UserRouter.post("/", UserController.createUser);
UserRouter.get("/", UserController.getAllUsers);
UserRouter.get("/:id", UserController.getUserById);
UserRouter.put("/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);

// UserRouter.route("/").get(getUsers).post(createUser);

// UserRouter.route("/:userId")
//   .get(getUserById)
//   .put(updateUser)
//   .delete(deleteUser);

export default UserRouter;
