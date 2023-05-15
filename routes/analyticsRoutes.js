import express from 'express';
import { facilityAnalytics } from "../controllers/analyticsController.js";
import { staffAnalytics } from '../controllers/analyticsController.js';
import { paymentAnalytics } from '../controllers/analyticsController.js';
import { bookingAnalytics } from '../controllers/analyticsController.js';
import { timeSlotsAnalytics } from '../controllers/analyticsController.js';

export const analyticsRouter = express.Router({ mergeParams: true });

analyticsRouter.route("/facilities").get(facilityAnalytics);

analyticsRouter.route("/staff").get(staffAnalytics);

analyticsRouter.route("/payment").get(paymentAnalytics);

analyticsRouter.route("/booking").get(bookingAnalytics);

analyticsRouter.route("/timeSlots").get(timeSlotsAnalytics);
