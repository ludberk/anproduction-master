import Joi from 'joi';

const productSchema = Joi.object({
  text: Joi.string().min(3).max(150).required().trim().messages({
    "string.base": "Text must be a string",
    "string.empty": "Text is required",
    "string.min": "Text must be at least 3 characters long",
    "string.max": "Text cannot exceed 150 characters",
    "any.required": "Text is required",
  }),
  furniture: Joi.boolean().required().default(false).messages({
    "boolean.base": "Furniture must be a boolean",
    "any.required": "Furniture is required",
  }),
  ironWork: Joi.boolean().required().default(false).messages({
    "boolean.base": "Iron Work must be a boolean",
    "any.required": "Iron Work is required",
  }),
  images: Joi.array().items(Joi.string()).messages({
    "array.base": "Images must be provided as an array",
    "any.required": "Images are required",
    "string.base": "Each image must be a string",
  }),
}).options({ abortEarly: false, allowUnknown: true });

export default productSchema;
