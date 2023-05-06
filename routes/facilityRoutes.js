import express from "express";
import { getFacilities } from "../controllers/facilityController";
import { getFacilityById } from "../controllers/facilityController";
import { createFacility } from "../controllers/facilityController";

export const facilityRouter = express.Router({ mergeParams: true });

facilityRouter.route("/").get(getFacilities);

facilityRouter.route("/:id").get(getFacilityById);

facilityRouter.route("/").post(createFacility);