import { PrismaClient, Prisma } from '@prisma/client';
import logger from '../utils/logger.js';

const prisma = new PrismaClient();
const NAME_SPACE = 'Analytics';

export const facilityAnalytics = async (req, res) =>{
  
  try {
    const { months } = req.query;

    console.log(months);

    const facilitiesByName = await prisma.facility.groupBy({
      by: ['facilityName'],
      _count: {
        facilityName: true
      },
      where: {
        createdAt: {
          gte: Prisma.dateTime.add(new Date(), { months: -months })
        }
      }
    });

    res.json(facilitiesByName);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

};

export const staffAnalytics = async (req, res) =>{

  try {
    const { months } = 3;

    console.log(months);

    const staffByCategory = await prisma.staff.groupBy({
      by: ['staffCategory'],
      _count: {
        staffCategory: true
      },
      where: {
        createdAt: {
          gte: Prisma.dateTime.add(new Date(), { months: -months })
        }
      }
    });

    res.json(staffByCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
    
};

export const paymentAnalytics = async (req, res) => {

  try {
    const { months } = req.query;

    console.log(months);

    const paymentByMethod = await prisma.payment.groupBy({
      by: ['paymentMethod'],
      _count: {
        paymentMethod: true
      },
      where: {
        createdAt: {
          gte: Prisma.dateTime.add(new Date(), { months: -months })
        }
      }
    });

    res.json(paymentByMethod);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

};

export const bookingAnalytics = async (req, res) => {

  try {
    const { months } = req.query;

    console.log(months);

    const bookingBycategory = await prisma.booking.groupBy({
      by: ['bookingCategory'],
      _count: {
        bookingCategory: true
      },
      where: {
        createdAt: {
          gte: Prisma.dateTime.add(new Date(), { months: -months })
        }
      }
    });

    res.json(bookingBycategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

};

export const timeSlotsAnalytics = async (req, res) => {

  try {
    const { months } = req.query;

    console.log(months);

    const timeSlotByPeriod = await prisma.timeSlot.groupBy({
      by: ['timePeriod'],
      _count: {
        timePeriod: true
      },
      where: {
        createdAt: {
          gte: Prisma.dateTime.add(new Date(), { months: -months })
        }
      }
    });

    res.json(timeSlotByPeriod);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

};