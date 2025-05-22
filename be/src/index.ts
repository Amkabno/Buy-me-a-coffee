import express, { json } from "express";
import { userRouter } from "./routers/user";
import { profileRouter } from "./routers/profile";
import { donationRouter } from "./routers/donation";
import { bankcardRouter } from "./routers/bankcard";
import { authRouter } from "./routers/auth";
import cookieParser from "cookie-parser";
const app = express();

app.use(json());
app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/donation", donationRouter);
app.use("/bankcard", bankcardRouter);
app.use("/auth", authRouter);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(8000, () => {
  console.log("server running at http://localhost:8000");
});
