import { validationHandlerMiddleware } from "../../../core/middleware/validation-handler-middleware.js";
import categorySchema from "../schema/category.schema.js";


export const CategorySchemaMiddleware = async (
  request,
  response,
  next
) =>
  validationHandlerMiddleware(
    categorySchema,
    request,
    response,
    next
  );
