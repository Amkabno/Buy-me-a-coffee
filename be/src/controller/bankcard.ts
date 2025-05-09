import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createBankCard = async (req: Request, res: Response) => {
  const { country, firstName, lastName, cardName, expiryDate, userId } =
    req.body;

  try {
    const response = await prisma.bankcard.create({
      data: {
        country,
        firstName,
        lastName,
        cardName,
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
    const response = await prisma.bankcard.findMany();
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
  const { country, firstName, lastName, cardName, expiryDate, userId } =
    req.body;

  try {
    const response = await prisma.bankcard.update({
      where: { id: Number(id) },
      data: {
        country,
        firstName,
        lastName,
        cardName,
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
    const response = await prisma.bankcard.delete({
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
