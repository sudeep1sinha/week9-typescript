interface User {
    firstName : string;
    lastName : string ;
    age : number ;
    email? : string ;
};

function isLegal(user:User){
    if (user.age > 18){
        return true;
    }else {
        return false
    }
}

function hello(user : User){
    console.log("hello there " + user.firstName)
}

isLegal({
    firstName: "sudep",
    lastName: "sinha",
    age: 21
})