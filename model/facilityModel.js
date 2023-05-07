import Joi from 'joi';

const facilitySchema = Joi.object({
    facilityId: Joi.number(),
    facilityName: Joi.string().required(),
});

export default facilitySchema;