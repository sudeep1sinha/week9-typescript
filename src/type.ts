import { date, string } from "zod";

type User1 = {
    firstName : string ;
    lastName : string ;
    age : number
}
// type and interface are almost similar in function as they aggregate data
interface User2 {
    firstName : string ;
    lastName : string ;
    age : number
}

// main feature of type is 

//Union
function greet1(id: (number | string )){

}

type GreetArg = number | string | boolean;

function greet2(id: GreetArg){

}
greet2(1);
greet2("1")

//intersection 
//a type that has properties of multiple types/interfaces
type Employee = {
    name:string ;
    startDate:Date;
};
// Manager can be interface and type both
interface Manager {
    name: string ;
    department : string ;
};

type Techlead = Employee & Manager ;
const t : Techlead ={
    name : "sudep",
    department : "comp", 
    startDate : new Date()
}





