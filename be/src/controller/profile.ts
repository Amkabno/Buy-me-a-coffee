import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const createProfile = async (req: Request, res: Response) => {
  const {
    userId,
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;

  try {
    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    if (!userExists) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    const profile = await prisma.profile.create({
      data: {
        about,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
        userId,
      },
    });

    return res.send({
      success: true,
      message: profile,
    });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};

export const findProfile = async (_: Request, res: Response) => {
  try {
    const profiles = await prisma.profile.findMany({
      include: { user: true },
    });

    return res.send({
      success: true,
      message: profiles,
    });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};

export const updateProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    about,
    avatarImage,
    socialMediaURL,
    backgroundImage,
    successMessage,
  } = req.body;

  try {
    const updatedProfile = await prisma.profile.update({
      where: { id: Number(id) },
      data: {
        about,
        avatarImage,
        socialMediaURL,
        backgroundImage,
        successMessage,
      },
    });

    return res.send({
      success: true,
      message: updatedProfile,
    });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};

export const deleteProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await prisma.profile.delete({
      where: { id: Number(id) },
    });

    return res.send({
      success: true,
      message: deleted,
    });
  } catch (error) {
    return res.status(500).send({ success: false, error });
  }
};
