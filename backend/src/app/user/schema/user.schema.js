import Joi from "joi";

const userSchema = Joi.object({
  userName: Joi.string().min(3).max(50).required().messages({
    "string.base": "User name must be a string",
    "string.empty": "User name is required",
    "string.min": "User name must be at least 3 characters long",
    "string.max": "User name cannot exceed 50 characters",
    "any.required": "User name is required",
  }),
  password: Joi.string().min(3).max(50).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password must be at least 3 characters long",
    "string.max": "Password cannot exceed 50 characters",
    "any.required": "Password is required",
  }),
}).options({ abortEarly: false, allowUnknown: false });

export default userSchema;
