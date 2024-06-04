import jwt from 'jsonwebtoken';
import Exceptions from '../exceptions/Exceptions.js';
import HttpStatuCode from '../exceptions/Httpstatuscodenode.js';
export default function checkToken(req,res,next) {
    if(req.url.toLowerCase().trim()=='/users/login'.toLowerCase().trim() ||
        req.url.toLowerCase().trim()=='/users/register'.toLowerCase().trim() )
    {
        next();
        return;
    }
    try {
        const token = req.headers?.authorization.split(" ")[1];
        debugger;
        const jwtObject= jwt.verify(token,process.env.JWT_SECRET);
        const checkTIme = jwtObject.exp>=Date.now()*1000;
        if(checkTIme)
        {
            res.status(HttpStatuCode.BAD_REQUEST).json({
                message: "TOKEN đã hết hạn"
            })
        }
        else
        {
            next();
            return;
        }
    } catch (exceptions) {
        res.status(HttpStatuCode.BAD_REQUEST).json({
            message: exceptions.message
        })
    }
}