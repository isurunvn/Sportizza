import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js';

const prisma = new PrismaClient();
const NAME_SPACE = 'Analytics';

export const facilityAnalytics = async (req, res) =>{
    
    const {range} = req.params.range;

    let where;
    const today  = new Date();

    switch(range){

        case '3': 
        where = {
            AND: [
                { createdAt: { gte: new Date(today.getFullYear(), today.getMonth() - 3, 1) } },
                { createdAt: { lt: new Date(today.getFullYear(), today.getMonth() + 1, 1) } },
              ],
        };
        break;
        case '6':
        where = {
            AND: [
            { createdAt: { gte: new Date(today.getFullYear(), today.getMonth() - 6, 1) } },
            { createdAt: { lt: new Date(today.getFullYear(), today.getMonth() + 1, 1) } },
            ],
        };
      break;
        case '12':
        where = {
            AND: [
            { createdAt: { gte: new Date(today.getFullYear() - 1, today.getMonth() + 1, 1) } },
            { createdAt: { lt: new Date(today.getFullYear(), today.getMonth() + 1, 1) } },
            ],
        };
      break;
      
    }

    try {
        const count = await prisma.facility.count({ where });
        res.json({ count });
      } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving facility count.');
      }

}


export const staffAnalytics = async (req, res) =>{
    
  const {range} = req.params.range;

  let where;
  const today  = new Date();

  switch(range){

      case '3': 
      where = {
          AND: [
              { createdAt: { gte: new Date(today.getFullYear(), today.getMonth() - 3, 1) } },
              { createdAt: { lt: new Date(today.getFullYear(), today.getMonth() + 1, 1) } },
            ],
      };
      break;
      case '6':
      where = {
          AND: [
          { createdAt: { gte: new Date(today.getFullYear(), today.getMonth() - 6, 1) } },
          { createdAt: { lt: new Date(today.getFullYear(), today.getMonth() + 1, 1) } },
          ],
      };
    break;
      case '12':
      where = {
          AND: [
          { createdAt: { gte: new Date(today.getFullYear() - 1, today.getMonth() + 1, 1) } },
          { createdAt: { lt: new Date(today.getFullYear(), today.getMonth() + 1, 1) } },
          ],
      };
    break;
    
  }

  try {
      const count = await prisma.facility.count({ where });
      res.json({ count });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving staff count.');
    }

}