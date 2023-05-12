import { Router } from "express";
import { verifyAddress, verifyAuth, verifyRealEstate } from "../middleware";
import {
  createRealEstate,
  getRealEstate,
} from "../controllers/realEstate.controller";

export const realEstateRouter = Router();

realEstateRouter.post(
  "/realEstate",
  verifyAuth,
  verifyRealEstate,
  verifyAddress,
  createRealEstate
);

realEstateRouter.get("/realEstate", getRealEstate);
