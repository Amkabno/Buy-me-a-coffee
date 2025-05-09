import { Router } from "express";
import {
  createDonation,
  findDonation,
  uptadeDonationById,
  deleteDonationById,
} from "../controller/user";
export const profileRouter = Router();
profileRouter
  .post("/", createDonation as any)
  .get("/", findDonation as any)
  .put("/:id", uptadeDonationById as any)
  .delete("/:id", deleteDonationById as any);
