import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import { compareSync } from "bcrypt";
import { secret_key } from "../../utils/env";
import jwt from "jsonwebtoken";

export const signin = async (req: Request, res: Response) => {
  const { password, email } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.send({ message: "user not found" });

    const isMatch = compareSync(password, user.password);
    if (!isMatch) return res.send({ message: "Email or password wrong" });

    const token = jwt.sign(user, secret_key as any, { expiresIn: 3600 });

    return res.cookie("token", token, {
      maxAge: 60 * 1000 * 10,
      secure: false, //http
    });
  } catch (error) {
    return res.send(error);
  }
};
