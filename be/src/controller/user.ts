import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    const response = await prisma.user.create({
      data: {
        email,
        password,
        name: username,
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

export const findUsers = async (_: Request, res: Response) => {
  try {
    const response = await prisma.user.findMany({});
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const uptadeUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, name } = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, name },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      error: error,
    });
  }
};
