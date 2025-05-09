import express, { json } from "express";
import { userRouter } from "./routers/user";
import { profileRouter } from "./routers/profile";
const app = express();

app.use(json());
app.use("/user", userRouter);
app.use("/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(8000, () => {
  console.log("server running at http://localhost:8000");
});
