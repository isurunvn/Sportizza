import express from 'express';
import { getStaff } from '../controllers/staffController.js';
// import {getStaffByName} from "../controllers/staffController.js";
import { getStaffByUserName } from '../controllers/staffController.js';
import {createStaff} from "../controllers/staffController.js";
import { updateStaff } from '../controllers/staffController.js';
import { removeStaff } from '../controllers/staffController.js';

export const staffRouter = express.Router({ mergeParams: true });

staffRouter.route('/').get(getStaff);

staffRouter.route('/:id').get(getStaffByUserName); 

staffRouter.route('/').post(createStaff);

staffRouter.route('/:id').put(updateStaff);

staffRouter.route('/:id').delete(removeStaff);


