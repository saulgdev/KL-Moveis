import { Request, Response } from "express";
import {
  createRealEstateService,
  getRealEstateSErvice,
} from "../services/realEstate.services";

export const createRealEstate = async (req: Request, res: Response) => {
  const newRealEstate = await createRealEstateService(req.body);
  return res.status(201).json(newRealEstate);
};

export const getRealEstate = async (req: Request, res: Response) => {
  const newRealEstate = await getRealEstateSErvice();
  return res.status(200).json(newRealEstate);
};
