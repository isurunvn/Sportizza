import { PrismaClient } from "@prisma/client";
import logger from '../utils/logger.js';
import staffSchema from "../model/staffModel.js";

const prisma = new PrismaClient();
const NAME_SPACE ='staff';

export const getStaff = async (req, res) => {

    try{
        const staff = await prisma.staff.findMany({
            where:{
                securityStatus: 'active',
            }
        });
        res.status(200).json(staff);
    }catch(error){
        res.status(500).sen(error.message);
        logger.error(NAME_SPACE, error.message);
    }
};


export const getStaffByAnyTerm = async (req, res) => {

    try {
        const searchTerm = req.query.q;

        const filteredStaff = await prisma.staff.findMany({
          where: {
            OR: [
  
              { firstName: { contains: searchTerm } },
              { lastName: { contains: searchTerm } },
              { userName: { contains: searchTerm } },
              { primaryContact: { contains: searchTerm } },
              { staffCategory: { contains: searchTerm } },
              
            ],
          },
        });
        res.status(200).send(filteredStaff);
      } catch (error) {
        res.status(500).send(error.message);
        logger.error(NAME_SPACE, error.message);
      }

}

export const createStaff = async (req, res) => {

    const {
        error,
        value,
      } = staffSchema.validate(req.body);

      if (!error) {
        try {
            const reqData = req.body;
            const staff = await prisma.staff.create({
                data:{
                    ...reqData
                }
            });
            res.status(200).send(staff);
        } catch (error) {
            res.status(500).send(error.message);
            logger.error(NAME_SPACE, error.message);
        }
      }else{
        res.status(500).send(error.details[0].message);
        logger.error(NAME_SPACE, error.details[0].message);
      }

}

export const updateStaff = async (req, res) =>{

    const {
        error,
        value,
      } = staffSchema.validate(req.body);

      if (!error) {
        try {
            const reqData = req.body;
            const staff = await prisma.staff.update({
                where: {
                    userName: (req.params.id)
                },
                data:{
                    ...reqData
                }
            });
            res.status(200).send(staff);
        } catch (error) {
            res.status(500).send(error.message);
            logger.error(NAME_SPACE, error.message);
        }
      }else{
        res.status(500).send(error.details[0].message);
        logger.error(NAME_SPACE, error.details[0].message);
      }
    
}


export const removeStaff = async (req, res) => {

    try {
      const staff = await prisma.staff.update({
        where: {
          userName: (req.params.id)
        },
        data: {
          securityStatus: 'inactive',
        },
      });
      logger.info(NAME_SPACE, 'Staff removed Successfully');
      res.status(200).send('Staff removed Successfully');
    } catch (error) {
      logger.error(NAME_SPACE, error.message);
      console.log(error.message)
      res.status(500).send(error);
    }
  };
