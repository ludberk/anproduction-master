import Joi from 'joi';

const categorySchema = Joi.object({
  title: Joi.string().min(2).max(150).required().trim().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title is required",
    "string.min": "Title must be at least 2 characters long",
    "string.max": "Title cannot exceed 150 characters",
    "any.required": "Title is required",
  }),
  text: Joi.string().max(200).min(2).trim().allow(null).default(null).when(Joi.ref('.'), {
    then: Joi.required().messages({
      "any.required": "Text is required when a value is provided",
    }),
  }).messages({
    "string.base": "Text must be a string",
    "string.empty": "Text is required",
    "string.max": "Text cannot exceed 200 characters",
  }),
  furniture: Joi.boolean().required().default(false).messages({
    "boolean.base": "Furniture must be a boolean",
    "any.required": "Furniture is required",
  }),
  ironWork: Joi.boolean().required().default(false).messages({
    "boolean.base": "Iron Work must be a boolean",
    "any.required": "Iron Work is required",
  })
}).options({ abortEarly: false, allowUnknown: false });

export default categorySchema;
