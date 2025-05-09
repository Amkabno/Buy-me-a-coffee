import { Router } from "express";
import {
  createBankcard,
  findBankcard,
  uptadeBankcardById,
  deleteBankcardById,
} from "../controller/user";
export const profileRouter = Router();
profileRouter
  .post("/", createBankcard as any)
  .get("/", findBankcard as any)
  .put("/:id", uptadeBankcardById as any)
  .delete("/:id", deleteBankcardById as any);
