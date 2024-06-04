import { body, validationResult } from 'express-validator';
import { userRepositories } from '../repositories/index.js';
import {EventEmitter} from 'node:events';
import HttpStatuCode from '../exceptions/Httpstatuscodenode.js';
const myEvent = new EventEmitter();
myEvent.on('event.register.user',(params)=>{
    console.log(`they take about: ${JSON.stringify(params)}`);
})

const login = async (req,res)=>{
    try {
        const error = validationResult(req);
        if(!error.isEmpty())
            return res.status(HttpStatuCode.BAD_REQUEST).json({error: error.array()})
        const {email,password}=req.body;
        const user=await userRepositories.login({email,password});
        res.status(HttpStatuCode.OK).json({
            message: "Login successfully",
            data: user
        })
    } catch (exceptions) {
        res.status(HttpStatuCode.BAD_REQUEST).json({
            message: exceptions.toString()
        })
    }
}
const register = async (req,res)=>{
    try {
        const {email,password,gender,name,age}=req.body;
        const newUser= await userRepositories.regsiter({email,password,gender,name,age});
        res.status(HttpStatuCode.INSERT_OK).json({
            message: "Register successfully",
            data: newUser
        })
    } catch (error) {
        debugger;
        res.status(HttpStatuCode.BAD_REQUEST).json({
            message: error
        })
    }
}
const getDetail = async (req,res)=>{

}
export default {
    login,
    register
}