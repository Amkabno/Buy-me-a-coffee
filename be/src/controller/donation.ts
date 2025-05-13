import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createDonation = async (req: Request, res: Response) => {
  const {
    amount,
    specialMessage,
    socialURLorBuyMeACoffee,
    donorId,
    recipientId,
  } = req.body;

  try {
    const response = await prisma.donation.create({
      data: {
        amount,
        specialMessage,
        socialURLorBuyMeACoffee,
        donorId,
        recipientId,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const findDonations = async (_: Request, res: Response) => {
  try {
    const response = await prisma.donation.findMany();
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
export const updateDonationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    amount,
    specialMessage,
    socialURLorBuyMeACoffee,
    donorId,
    recipientId,
  } = req.body;

  try {
    const response = await prisma.donation.update({
      where: { id: Number(id) },
      data: {
        amount,
        specialMessage,
        socialURLorBuyMeACoffee,
        donorId,
        recipientId,
      },
    });

    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteDonationById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await prisma.donation.delete({
      where: { id: Number(id) },
    });

    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
