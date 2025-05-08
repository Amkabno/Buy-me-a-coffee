import { Router } from "express";
import {
  createUser,
  findUsers,
  uptadeUserById,
  deleteUserById,
} from "../controller/user";
export const userRouter = Router();
userRouter
  .post("/", createUser as any)
  .get("/", findUsers as any)
  .put("/:id", uptadeUserById as any)
  .delete("/:id", deleteUserById as any);
