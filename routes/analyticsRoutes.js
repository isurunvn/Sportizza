import express from 'express';
import { facilityAnalytics } from "../controllers/analyticsController.js";
import { staffAnalytics } from '../controllers/analyticsController.js';
import { paymentAnalytics } from '../controllers/analyticsController.js';
import { bookingAnalytics } from '../controllers/analyticsController.js';
import { timeSlotsAnalytics } from '../controllers/analyticsController.js';

export const analyticsRouter = express.Router({ mergeParams: true });

analyticsRouter.route("/facilities/analytics").get(facilityAnalytics);

analyticsRouter.route("/staff/analytics").get(staffAnalytics);

analyticsRouter.route("/payment/analytics").get(paymentAnalytics);

analyticsRouter.route("/booking/analytics").get(bookingAnalytics);

analyticsRouter.route("/timeSlots/analytics").get(timeSlotsAnalytics);
