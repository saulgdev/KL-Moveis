import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./error";
import { userRoutes } from "./routes/user.routes";
import { loginRouter } from "./routes/login.routes";

const app = express();
app.use(express.json()).use(errorHandler).use(userRoutes).use(loginRouter);

export default app;
