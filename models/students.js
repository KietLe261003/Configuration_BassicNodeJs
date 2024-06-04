import mongoose, { Schema, ObjectId } from "mongoose";
import pkg from 'validator';
const { isEmail } = pkg;
export default mongoose.model("students",new Schema({
    id: {type: ObjectId},
    name: {
        type: String, 
        require: true, 
        validate: {
            validator: (value)=>value.length>3,
            message: "Tên người dùng phải trên 3 ký tự"
        }
    },
    email: {
        type: String,
        require: true,
        validate: {
            validator: (value) => isEmail(value),
            message: "Email đúng định dạng"
        }
    },
    gender: {
        type: String, 
        require: true,
        validate: {
            validator: (value)=>value=="NAM",
            message: "Giới tính là NAM hoặc NU"
        }
    },
    age: {type: String,require: true}
}))