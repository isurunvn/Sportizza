import express from "express";
import { getFacilities } from "../controllers/facilityController.js";
import { getFacilityById } from "../controllers/facilityController.js";
import { createFacility } from "../controllers/facilityController.js";

export const facilityRouter = express.Router({ mergeParams: true });

facilityRouter.route("/").get(getFacilities);

facilityRouter.route("/:id").get(getFacilityById);

facilityRouter.route("/").post(createFacility);