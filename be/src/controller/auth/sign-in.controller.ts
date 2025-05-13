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

    if (!user) return res.send({ message: "User not found" });

    const isMatch = compareSync(password, user.password);

    if (!isMatch) return res.send({ message: "Email or password is wrong" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      secret_key as string,
      { expiresIn: "1h" }
    );

    return res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure: false,
      })

      .send({ message: "Signin successful" });
  } catch (error) {
    console.error(error);
    return res.send({ message: "Internal server error", error });
  }
};
