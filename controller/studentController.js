import HttpStatuCode from "../exceptions/Httpstatuscodenode.js"
import { studentRepositories } from "../repositories/index.js";
const home = async (req,res)=>{
    res.status(200).json({
        message: "Lấy tất cả học sinh",
        students: [
            {
                name: "Kiệt",
                email: "Kiet@gmail.com"
            },
            {
                name: "Thắng",
                email: "Thang@gmail.com"
            },
            {
                name: "Minh",
                email: "Minh@gmail.com"
            }
        ]
    })
}
const getStudent=async (req,res)=>{
    
    res.send("student by id: "+req.params.id)
}

const insertStudent = async (req,res)=>{
    try {
        const {name,email,gender,age}=req.body;
        const student= await studentRepositories.insert({name,email,gender,age});
        res.status(HttpStatuCode.INSERT_OK).json({
            message: "Insert thành công",
            data: student
        })
    } catch (exceptions) {
        res.status(HttpStatuCode.BAD_REQUEST).json({
            message: exceptions.message
        })
    }
}
export default{
    home,
    getStudent,
    insertStudent
}