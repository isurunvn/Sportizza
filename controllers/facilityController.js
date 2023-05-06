import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger';
import facilitySchema from '../model/facilityModel';

const prisma = new PrismaClient();
const NAME_SPACE = 'Facility';

export const getFacilities = async (req, res) =>{

    try{
        const facility = await prisma.facility.findMany({});
        res.status(200).json(facility);
    }catch(error){
        res.status(500).send(error.message);
        logger.error(NAME_SPACE , error.message);
    }

};

export const getFacilityById = async (req, res) =>{

    try{
        const facility = await prisma.facility.findMany({
            where: {
                facilityId: parseInt(req.params.id)
            }
        });
        res.status(200).send(facility);
    }catch(error){
        res.status(500).send(error.message);
        logger.error(NAME_SPACE, error.message);
    }

}

export const createFacility = async (req, res) =>{

    const {
        error,
        value,
      } = facilitySchema.validate(req.body);

      if (!error) {
        try {
            const reqData = req.body;
            const facility = await prisma.facility.create({
                facility:{
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