const Joi = require('joi');

const facilitySchema = Joi.object({
    facilityId: Joi.number().required(),
    facilityName: Joi.string().required(),
});

export default facilitySchema;