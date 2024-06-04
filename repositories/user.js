import users from '../models/users.js'
import { print, OutputType } from "../helpers/print.js";
import bcrypt from 'bcrypt';
import Exceptions from '../exceptions/Exceptions.js';
import jwt from 'jsonwebtoken';
const login = async ({email,password})=>{
    const user = await users.findOne({email}).exec();
    if(user)
    {
        const checkPassword=await bcrypt.compare(password,user.password);
        if(checkPassword)
        {
            let token = jwt.sign(
                {
                    data: user
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '30 day'
                }
            )
            return {
                ...user.toObject(),
                password: "Not Show",
                token: token
            };
        }
        else
        throw new Exceptions(Exceptions.Wrong_Email_Login);
    }
    else 
    {
        print("Không có người này",OutputType.ERROR);
    }
}
const regsiter = async (
    {
        email,
        password,
        gender,
        name,
        age
    })=>{
    try {
        let checkUser = await users.findOne({email}).exec();
        if(!checkUser)
        {
            const hanshPassword=await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS));
            const newUser = await users.create({
                name,
                email,
                password: hanshPassword,
                gender,
                age
            });
            return {
                ...newUser._doc,
                password: "Not Show"
            };
        }
        else 
        {
            print("Lỗi email đã được đăng ký",OutputType.ERROR);
        }
    } catch (error) {
        print("Lỗi thêm người dùng",OutputType.ERROR)
    }
}
export default {
    login,
    regsiter
}