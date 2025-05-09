import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcrypt";

export const checkUser = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { name: username },
    });

    if (user) {
      return res.send({ message: "username already taken" });
    }
    return res.send({ message: "username available" });
  } catch (error) {}
};

export const signup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const response = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
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
