import { Router } from "express";

export const userRoutes = Router();

userRoutes.post("/users");
userRoutes.get("/users");
userRoutes.patch("/user/:id");
userRoutes.delete("/user/:id");
