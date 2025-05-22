import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createBankCard = async (req: Request, res: Response) => {
  const { country, firstName, lastName, cardNumber, expiryDate, userId } =
    req.body;

  try {
    const response = await prisma.bankCard.create({
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
        userId,
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

export const findBankCards = async (_: Request, res: Response) => {
  try {
    const response = await prisma.bankCard.findMany();
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const updateBankCardById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { country, firstName, lastName, cardNumber, expiryDate, userId } =
    req.body;

  try {
    const response = await prisma.bankCard.update({
      where: { id: Number(id) },
      data: {
        country,
        firstName,
        lastName,
        cardNumber,
        expiryDate: new Date(expiryDate),
        userId,
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

export const deleteBankCardById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await prisma.bankCard.delete({
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
