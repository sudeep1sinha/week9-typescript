//you can use types in array

type NumberArr = number[];

function maxValue(arr : NumberArr){
    let max =0;
    for( let i=0; i<arr.length ; i++){
        if (arr[i]> max ){
            max=arr[i]
        }
    }
    return max
}

maxValue([1,2,3])

interface User {
    firstName : string ;
    lastName : string ;
    age : number
}

function filterUser(users:User[]){
    return users.filter(x => x.age >=18);
}

console.log(filterUser([{
    firstName : "deep",
    lastName : "sinha",
    age:21
},{
    firstName: "kagti",
    lastName:" kahti",
    age:22

}, ]));