import express from "express";
import UserController from "../controller/usersController.js";

const router = express.Router();

router
    .get("/api/v1/users", UserController.listUsers)
    .post("/api/v1/users", UserController.registerUser)
export default router;