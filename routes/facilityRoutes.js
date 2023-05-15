import express from "express";
import { getFacilities } from "../controllers/facilityController.js";
import { getFacilitiesByAnyTerm } from "../controllers/facilityController.js";
import { createFacility } from "../controllers/facilityController.js";
import { updateFacility } from "../controllers/facilityController.js";
import { removeFacility } from "../controllers/facilityController.js";

export const facilityRouter = express.Router({ mergeParams: true });

facilityRouter.route("/").get(getFacilities);

facilityRouter.route("/search").get(getFacilitiesByAnyTerm); 

facilityRouter.route("/").post(createFacility);

facilityRouter.route("/:id").put(updateFacility);

facilityRouter.route("/:id").delete(removeFacility);