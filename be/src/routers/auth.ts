import express from "express";
import { signup } from "../controller/auth/sign-up.controller";
import { signin } from "../controller/auth/sign-in.controller";
import { checkUser } from "../controller/auth/sign-up.controller";

const router = express.Router();

router.post("/signup", signup as any);

router.post("/signin", signin as any);

router.post("/checkUser", checkUser as any);

export { router as authRouter };
