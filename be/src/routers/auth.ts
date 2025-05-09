import { Router } from "express";
import { signin } from "../controller/auth/sign-in.controller";
export const authRouter = Router();

authRouter.post("/", signin as any);
