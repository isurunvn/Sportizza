import Joi from "joi";

const satffSchema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    userName: Joi.string().required(),
    primaryContact: Joi.string(),
    staffCategory: Joi.string(),
});

export default satffSchema;