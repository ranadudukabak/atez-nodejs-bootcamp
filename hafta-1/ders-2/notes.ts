// string - number - boolean
// let & const
// int IDNumber = 123123123  === const || let IDNumber:number = 123123123

let stringVal: string = "Some String Value";
let numberValue:number = 123123;
let boolValue:boolean = true;
// any type
let someUnknownValue: any;

let userInput: number[] = [];
let stringUserInput: string[] = [];

userInput = [2, 3];
stringUserInput = ['some string Val', 'another string val'];

// someUnknownValue = ['some', 2, true];
someUnknownValue = {
    name: 'aldigi degerin hic bir onemi yok',
};

// function userLogin (email: string, password: string) {
//     return  email + password;
// }

// Union Type example
const userLogin = (email:string, password:string | number) => {
    if(typeof password === 'string') {
        return email + password.toUpperCase();
    }else {
        return email + password;
    }
}

// Check out Type ---
interface Animal {
    name: string;
    type: string;
    age: number;
    eyeColor?: string;
    wiskers?: boolean;
}

interface Cat extends Animal {
    // fill here;
}

const java: Cat = {
    name: "Java",
    type: "Cat",
    age: 3,
}

const createCatUser = (cat: {name: string, type: string, age:number}): string => {
   return `Our cats name is ${cat.name} and she is ${cat.type} also she is ${cat.age} years old `
}

console.log(createCatUser(java));

console.log(userLogin('asdasd', 'asdasdfa'))