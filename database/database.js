import mongoose from "mongoose";
import { print, OutputType } from "../helpers/print.js";
import Exceptions from "../exceptions/Exceptions.js";
mongoose.set('strictQuery',true);
const connect= async ()=>{
    try {
        let connection = await mongoose.connect(process.env.MongoURI);
        print("Connect db successfully",OutputType.SUCCESS);
        return connection;
    } catch (error) {
        if(error.code==8000)
            throw new Exceptions('Sai mat khau');
        else if(error.code=='ENOTFOUND')
            throw new Exceptions('Sai chuoi ket noi');

        debugger;
        throw new Error('Canot connect');
        //console.log(error);
    }
}
export default connect;