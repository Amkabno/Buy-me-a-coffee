import { Router } from "express";
import {
  createProfile,
  findProfile,
  uptadeProfileById,
  deleteProfileById,
} from "../controller/user";
export const profileRouter = Router();
profileRouter
  .post("/", createProfile as any)
  .get("/", findProfile as any)
  .put("/:id", uptadeProfileById as any)
  .delete("/:id", deleteProfileById as any);
