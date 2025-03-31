import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRouter from "./router/user.route";
import noteRouter from "./router/note.route";
import authRouter from "./router/auth.route";
import shareRouter from "./router/share.route";
import morgan from "morgan";
import fs from "fs";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());
connectDB();

app.use(
  cors({
    origin: "*",
  })
);
const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("dev"));
app.use(morgan("combined", { stream: logStream }));

app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);
app.use("/api/auth", authRouter);
app.use("/api/share", shareRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
