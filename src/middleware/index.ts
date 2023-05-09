import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../error";

export const verifyEmail = async (
  res: Response,
  req: Request,
  next: NextFunction
) => {
  const email = req.body.email;

  if (await userRepository.findOneBy({ email })) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
