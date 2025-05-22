import { Router } from "express";
import {
  createDonation,
  findDonations,
  updateDonationById,
  deleteDonationById,
} from "../controller/donation";
export const donationRouter = Router();
donationRouter
  .post("/", createDonation as any)
  .get("/", findDonations as any)
  .put("/:id", updateDonationById as any)
  .delete("/:id", deleteDonationById as any);
