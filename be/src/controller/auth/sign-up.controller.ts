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
      return res.send({ message: "Username already taken" });
    }
    return res.send({ message: "Username available" });
  } catch (error) {
    console.error(error);
    return res.send({ message: "Internal server error" });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: username,
      },
    });

    return res.send({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.send({ message: "Internal server error", error });
  }
};
