import { config } from "dotenv"
import jwt  from "jsonwebtoken"
import { UserModel } from "../../app/user/model/user.model.js";

config();


const SECRET = process.env.TOKEN_SECRET;

export  function authMiddleware(req, res, next){
    let token = req.cookies.authToken;
     console.log("----------Middlware Section--------");
    // console.log(token);
    // console.log("------------------------");
    // const header = req.headers['authorization']
    // const token = header && header.split(" ")[1]   // "Bearer kfjkdsfjkdjfkdsjfkdsjfsdfjsdkfjs"

    if(!token){
        return res.status(401).send("No Token");
    }

    try {
        jwt.verify(token,SECRET,(err,data)=>{
            if (err) {
                console.log(err)
                console.log("middlware error")
                return res.status(403).send("Token Forbidden");
            }
            data = data.user;
            req.user = data;
            //console.log("User id ",data)
            UserModel.exists({ _id: data._id }).then((userExists) => {
         
                if (userExists) {
                    //console.log(`\tUserExists ${userExists}`)
                    next();
                } else {
                    return res.status(403).send("User does not exist");
                }
            }).catch((err) => {
                console.error(err);
                return res.status(500).send("Internal Server Error");
            });
      
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
    


}
