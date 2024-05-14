import Joi from "joi";

const onlyUserPasswordSchema = Joi.object({
  oldpassword: Joi.string().min(3).max(50).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password must be at least 3 characters long",
    "string.max": "Password cannot exceed 50 characters",
    "any.required": "Password is required",
  }),
  newpassword: Joi.string().min(3).max(50).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password must be at least 3 characters long",
    "string.max": "Password cannot exceed 50 characters",
    "any.required": "Password is required",
  }),
}).options({ abortEarly: false, allowUnknown: false });

export default onlyUserPasswordSchema;
