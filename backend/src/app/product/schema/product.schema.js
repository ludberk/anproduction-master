import Joi from "joi";

const productSchema = Joi.object({
  text: Joi.string().min(3).max(150).required().messages({
    "string.base": "Text must be a string",
    "string.empty": "Text is required",
    "string.min": "Text must be at least 3 characters long",
    "string.max": "Text cannot exceed 150 characters",
    "any.required": "Text is required",
  }),
  furniture: Joi.boolean().required().default(false).messages({
    "boolean.base": "Furniture must be a boolean value",
    "any.required": "Furniture is required",
  }),
  ironWork: Joi.boolean().required().default(false).messages({
    "boolean.base": "Iron work must be a boolean value",
    "any.required": "Iron work is required",
  }),
}).options({ abortEarly: false });

export default productSchema;