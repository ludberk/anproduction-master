import bcrypt from 'bcrypt';
import { APIError } from '../../shared/error-response/error-response.js';

export async function  createPassword(stringpassword) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(stringpassword,salt);

    return password;
}



export async function comparePassword(stringpassword,hashpassword) {
    const iscompare = await bcrypt.compare(stringpassword,hashpassword);
   
    if(iscompare){
        
        //console.log(iscompare);
        return true;
    }
else
        throw new APIError("Username or password is incorrect", 401);

}
