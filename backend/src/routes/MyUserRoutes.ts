import express, { Router } from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.post("/", MyUserController.createCurrentUser);

export default Router;
