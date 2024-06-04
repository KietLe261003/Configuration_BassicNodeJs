import express from "express";
import * as dotenv from 'dotenv';
dotenv.config();
import connect from "./database/database.js";
import checkToken from './authentication/auth.js';

const app= express();
const port =process.env.PORT || 3000;

//routes
import {userRouter, studentRouter} from './routes/index.js';

app.use(checkToken);
app.use(express.json());
app.use('/users',userRouter);
app.use('/students',studentRouter);



app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(port, async()=>{
    await connect();
    console.log("Đang chạy cổng: ",port);
});
