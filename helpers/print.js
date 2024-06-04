import chalk from "chalk";
class OutputType{
    static INFOMATION = "INFORMATION";
    static SUCCESS = "SUCCESS";
    static WARNING = "WARNING";
    static ERROR = "ERROR";
}
function print(message,outputType) {
    if(outputType=="INFORMATION")
        console.log(chalk.white(message));
    else if(outputType=="SUCCESS")
        console.log(chalk.green(message));
    else if(outputType=="WARNING")
        console.log(chalk.yellow(message));
    else if(outputType=="ERROR")
        console.log(chalk.red(message));
    else 
        console.log(message);
}
export {
    print,
    OutputType
}