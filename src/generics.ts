function identity<T>(arg:T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

output1.toUpperCase();



function getfirstElement<T>(arr : T[]){
    return arr[0];
}

const el = getfirstElement(["sudepsinha","kahti"]);
console.log(el.toLowerCase())
const el2 = getfirstElement([1,2]);
const el3 = getfirstElement([true , false]);

interface User1 {
    name : string;
}
const el4 = getfirstElement<User1>([{name : "sudep"}])