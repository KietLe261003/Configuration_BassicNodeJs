import mongoose, {Schema,ObjectId } from "mongoose";

export default mongoose.model('User', new Schema({
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
            validator: (value)=>isEmail,
            message: "Email đúng định dạng"
        }
    },
    password: {type: String, require: true},
    gender: {type: String, require: true},
    age: {type: String,require: true}
}))