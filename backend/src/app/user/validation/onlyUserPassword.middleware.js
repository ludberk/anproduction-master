
import { validationHandlerMiddleware } from "../../../core/middleware/validation-handler-middleware.js";
import onlyUserPasswordSchema from "../schema/onlyUserPassword.schema.js";



export const onlyUserPasswordSchemaMiddleware = async (
  request,
  response,
  next
) =>
  validationHandlerMiddleware(
    onlyUserPasswordSchema,
    request,
    response,
    next
  );
