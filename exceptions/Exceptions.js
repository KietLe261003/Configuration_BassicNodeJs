import { print, OutputType } from "../helpers/print.js";
export default class Exceptions extends Error {
    static Wrong_Email_Login="Wrong Email or Password";
    static Wrong_Insert_Student="Lỗi thêm học sinh";
    constructor(message){
        super(message);
        print(message,OutputType.ERROR);
    }
}