import { APIError } from "../../shared/error-response/error-response.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const accessLogStream = fs.createWriteStream(path.join(__dirname, '../../../logs/error.log'), { flags:'a'})
const errorHandlerMiddleware = (error, request, response, next) => {

  if (error instanceof APIError) {
    // accessLogStream.write(`Error: ${error.message} `);

      if (error instanceof APIError) {
        return response.status(error.statusCode || 400).json({
          success: false,
          message: error.message,
        });
      }
      // else
      //   accessLogStream.write("Error: Internal Server Error! ");

      console.log(error);
      

  }
  return response.status(500).json({
    success: false,
    message: "Internal Server Error!",
  });
};

export default errorHandlerMiddleware;
