import express from 'express';
import { facilityAnalytics } from "../controllers/analyticsController.js";
import { staffAnalytics } from '../controllers/analyticsController.js';

export const analyticsRouter = express.Router({ mergeParams: true });

analyticsRouter.route("/facilities/count/:range").get(facilityAnalytics);

analyticsRouter.route("/staff/count/:range").get(staffAnalytics);