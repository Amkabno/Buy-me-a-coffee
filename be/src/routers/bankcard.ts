import { Router } from "express";
import {
  createBankCard,
  findBankCards,
  updateBankCardById,
  deleteBankCardById,
} from "../controller/bankcard";
export const bankcardRouter = Router();
bankcardRouter
  .post("/", createBankCard as any)
  .get("/", findBankCards as any)
  .put("/:id", updateBankCardById as any)
  .delete("/:id", deleteBankCardById as any);
