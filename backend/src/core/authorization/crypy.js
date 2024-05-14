import {config} from "dotenv";
import jwt from "jsonwebtoken"

config()
const SECRETKEY = process.env.TOKEN_SECRET
export  function createTokenByUser(user) {
    return jwt.sign({user},SECRETKEY, {expiresIn: "48h", algorithm: "HS512" })
}

