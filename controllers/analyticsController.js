import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const NAME_SPACE = 'Analytics';

export const facilityAnalytics = async (req, res) =>{
  
  try {
    const currentDate = new Date();
    const { months } = req.query;
    const monthsAgo = new Date();

    monthsAgo.setMonth(monthsAgo.getMonth() - months);

    const facilitiesByName = await prisma.facility.groupBy({
      select: {
        facilityName: true,
        _count: {
          select: {
            facilityName: true
          }
        }
      },
      by: ['facilityName'],
      where: {
        createdAt: {
          gte: monthsAgo,
          lte: currentDate,
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
    const currentDate = new Date();
    const { months } = req.query;
    const monthsAgo = new Date();

    monthsAgo.setMonth(monthsAgo.getMonth() - months);

    const staffByCategory = await prisma.staff.groupBy({
      select: {
        staffCategory: true,
        _count: {
          select: {
            userName: true
          }
        }
      },
      by: ['staffCategory'],
      where: {
        createdAt: {
          gte: monthsAgo,
          lte: currentDate,
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
    const currentDate = new Date();
    const { months } = req.query;
    const monthsAgo = new Date();

    monthsAgo.setMonth(monthsAgo.getMonth() - months);

    const paymentByMethod = await prisma.booking.groupBy({
      select: {
        payment_method: true,
        _count: {
          select: {
            payment_method: true
          }
        }
      },
      by: ['payment_method'],
      where: {
        createdAt: {
          gte: monthsAgo,
          lte: currentDate,
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
    const currentDate = new Date();
    const { months } = req.query;
    const monthsAgo = new Date();

    monthsAgo.setMonth(monthsAgo.getMonth() - months);

    const bookingsByMonth = await prisma.booking.groupBy({

      select: {
        bookedMonth: true,
        _count: {
          select: {
            bookedMonth: true
          }
        }
      },
      by: ['bookedMonth'],
      where: {
        createdAt: {
          gte: monthsAgo,
          lte: currentDate,
        }
      }
    });

    res.json(bookingsByMonth);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

};

export const timeSlotsAnalytics = async (req, res) => {

  try {
    const currentDate = new Date();
    const { months } = req.query;
    const monthsAgo = new Date();

    monthsAgo.setMonth(monthsAgo.getMonth() - months);

    const countOfTimeSlots = await prisma.time_slot.groupBy({
      select: {
        start_time: true,
        _count: {
          select: {
            start_time: true
          }
        }
      },
      by: ['start_time'],
      where: {
        createdAt: {
          gte: monthsAgo,
          lte: currentDate,
        }
      }
    });

    res.json(countOfTimeSlots);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

};