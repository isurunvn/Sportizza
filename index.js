import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import log from './utils/logger.js'
import {facilityRouter} from './routes/facilityRoutes.js'
import { staffRouter } from './routes/staffRoutes.js';
import { analyticsRouter } from './routes/analyticsRoutes.js';

const app =  express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/facilities', facilityRouter);

app.use('/staff', staffRouter);

app.use('/analytics', analyticsRouter);

app.listen(PORT, ()=>{
    log.info(`Server running on port ${PORT}`);
});