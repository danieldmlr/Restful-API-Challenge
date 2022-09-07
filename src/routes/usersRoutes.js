import express from "express";
import UserController from "../controller/usersController.js";

const router = express.Router();

router

    .get("/api/v1/users", UserController.listUsers)
    .get("/api/v1/users/:id", UserController.listUsersById)
    .post("/api/v1/users", UserController.registerUser)
    .put("/api/v1/users/:id", UserController.updateUser)

export default router;