import "express-async-errors";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createDbConnection } from "./core/confige/db.config.js";
import bodyParser from "body-parser";
import errorHandlerMiddleware from "./core/middleware/error-handler-middleware.js";
import userRouter from "./app/user/user.route.js";
import productRouter from "./app/product/product.router.js";
import categoryRouter from "./app/category/category.router.js";
import { authMiddleware } from "./core/middleware/authMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
config()

const PORT = 8080;

const rateConfig = rateLimit({
    windowMs: 10 * 60 * 5000,
    limit: 100,
    standardHeaders: "draft-6",
    legacyHeaders: false,
    message: "<p>Express many requests</p>",
  });


  createDbConnection()
  .then(() => {
    //console.log("MongoDB connection established");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const server = express();
export const ServerApp = createServer(server);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.disable("x-powered-by");
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
const mainPath = "/api/v1";

server.use(mainPath,userRouter);
/////////////////////////

server.use("/",userRouter);
server.use("/product",authMiddleware,productRouter);
server.use("/category",authMiddleware,categoryRouter);
server.use(errorHandlerMiddleware)



export function serverStart() {
    ServerApp.listen(PORT, async () => {
      console.log(PORT)
      console.log(`Server is running: http://localhost:${PORT}`);
    });
  }