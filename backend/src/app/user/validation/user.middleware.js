
import { validationHandlerMiddleware } from "../../../core/middleware/validation-handler-middleware.js";

import userSchema from "../schema/user.schema.js";

export const userSchemaMiddleware = async (
  request,
  response,
  next
) =>
  validationHandlerMiddleware(
    userSchema,
    request,
    response,
    next
  );
