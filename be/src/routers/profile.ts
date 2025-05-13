import { Router } from "express";
import {
  createProfile,
  findProfile,
  updateProfileById,
  deleteProfileById,
} from "../controller/profile";
export const profileRouter = Router();
profileRouter
  .post("/", createProfile as any)
  .get("/", findProfile as any)
  .put("/:id", updateProfileById as any)
  .delete("/:id", deleteProfileById as any);
