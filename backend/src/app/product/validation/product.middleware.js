
import { validationHandlerMiddleware } from "../../../core/middleware/validation-handler-middleware.js";
import productSchema from "../schema/product.schema.js";

export const ProductSchemaMiddleware = async (
  request,
  response,
  next
) =>
  validationHandlerMiddleware(
    productSchema,
    request,
    response,
    next
  );
