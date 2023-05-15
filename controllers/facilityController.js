import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger.js';
import facilitySchema from '../model/facilityModel.js';

const prisma = new PrismaClient();
const NAME_SPACE = 'Facility';

export const getFacilities = async (req, res) =>{

    try{
        const facility = await prisma.facility.findMany({
            where: {
                securityStatus: 'active',
            }
        });
        res.status(200).json(facility);
    }catch(error){
        res.status(500).send(error.message);
        logger.error(NAME_SPACE , error.message);
    }

};


export const getFacilitiesByAnyTerm = async (req, res) => {
    try {
      const searchTerm = req.query.q;
      console.log(searchTerm);
      
      const filteredFacilities = await prisma.facility.findMany({
        where: {
          OR: [

            { facilityName: { contains: searchTerm } } 
            
          ],
        },
      });
      
      res.status(200).send(filteredFacilities);
    } catch (error) {
      res.status(500).send(error.message);
      logger.error(NAME_SPACE, error.message);
      console.log(error);
    }
  };

export const createFacility = async (req, res) =>{

    const {
        error,
        value,
      } = facilitySchema.validate(req.body);

      if (!error) {
        try {
            const reqData = req.body;
            const facility = await prisma.facility.create({
                data:{
                    ...reqData
                }
            });
            res.status(200).send(facility);
        } catch (error) {
            res.status(500).send(error.message);
            logger.error(NAME_SPACE, error.message);
        }
      }else{
        res.status(500).send(error.details[0].message);
        logger.error(NAME_SPACE, error.details[0].message);
      }
    
}

export const updateFacility = async (req, res) =>{

    const {
        error,
        value,
      } = facilitySchema.validate(req.body);

      if (!error) {
        try {
            const reqData = req.body;
            const facility = await prisma.facility.update({
                where: {
                    facilityId: parseInt(req.params.id)
                },
                data:{
                    ...reqData
                }
            });
            res.status(200).send(facility);
        } catch (error) {
            res.status(500).send(error.message);
            logger.error(NAME_SPACE, error.message);
        }
      }else{
        res.status(500).send(error.details[0].message);
        logger.error(NAME_SPACE, error.details[0].message);
      }
    
}


export const removeFacility = async (req, res) => {

    try {
      const facility = await prisma.facility.update({
        where: {
          facilityId: parseInt(req.params.id),
        },
        data: {
          securityStatus: 'inactive',
        },
      });
      logger.info(NAME_SPACE, 'Facility removed Successfully');
      res.status(200).send('Facility removed Successfully');
    } catch (error) {
      logger.error(NAME_SPACE, error.message);
      console.log(error.message)
      res.status(500).send(error);
    }
  };
  