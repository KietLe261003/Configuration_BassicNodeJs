import Exceptions from "../exceptions/Exceptions.js";
import students from "../models/students.js";

const getAllStudent = ()=>{
    console.log("get All student");
}
const insert = async ({
    name,
    email,
    gender,
    age
})=>{
    try {
        //console.log(email);
        const student = await students.create({name,email,gender,age})
        return student;
    } catch (error) {
        throw new Exceptions(Exceptions.Wrong_Insert_Student);
    }
}
export default {
    getAllStudent,
    insert
}