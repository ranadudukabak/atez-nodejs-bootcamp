// @ts-ignore
import * as path from "path";

function takeSomeJobAndReturn<J> (job:J): J {
    console.log(job)
    return job
}

// lint (eslint -- tslint) belirli standartlari kod yaziminda mecburi sekle getirir.
// ARASTIRMA KONUSU: es/ts lint;

const message: string = takeSomeJobAndReturn('Hello World'); // SADECE BURADA GERCEKLESTIGINDE STRING
const messageNum: number = takeSomeJobAndReturn(2); // SADECE BURADA GERCEKLESTIGINDE NUMBER

// takeSomeJobAndReturn<string>('asdasfasd');

// @ts-ignore
function createAnArrayFromAnArray<A> (items: A[]): A[] {

    return new Array<A>().concat(items)
}

let numArray = createAnArrayFromAnArray([200, 300, 400]);

let strArray = createAnArrayFromAnArray(['hello', 'world']);

// numArray.push('String Value'); numArray icin "A" her zaman number bir degerdir.
// strArray.push(2) strArray icin "A" her zaman string bir degerdir.

function getUserInfo<U, I>(id: U, name:I) :void {
    console.log(`${id} numarali kullanicinin ismi: ${name}`);
}

getUserInfo<number, string>(1,'hakan');

getUserInfo<string, boolean>('test', true);

// function showTypes<U, I>(id: U, name:I) :void {
//     console.log(typeof id, typeof name);
// }
//
// showTypes<number, string>(1,'hakan');

// Notlar, Bir fonksiyona birden fazla generic type atayabiliriz.
// Generic tipler tek tip generic tip gibi gerceklestigi veya calistigi durumda aldigi degerden baska bir deger alamazken
// Baska bir durumda tekrar cagirildiginda farkli tipler alabilirler.


class GenericNumber<T> {
    staringPoint:T;
    add:(x:T, y:T) => T
}

let createGenericNumber = new GenericNumber<number>();
createGenericNumber.staringPoint = 0
createGenericNumber.add = function (x:number, y:number) {
    return x + y;
};

interface IShoppingHistory {
    itemName: string;
    quantity: number;
    color: string
}


interface IUsers {
    email:string;
    name:string;
    id:number | string;
    isVerified: boolean;
    shoppingHistory: IShoppingHistory
}

interface Collection<T> {
    add:(x: T) => void;
    remove:(y: T) => void;
    returnArray(): T[]
}

// Kalitim aldigimiz interface icerisinde generic bir tip varsa ve bu bir harf ile isimlendirdiyse
// baska bir instance icerisinde kullanilacagi zaman verilecek olan generic tipi belirten harfin farkli olmasinin
// bir onemi yoktur, tipin gelecek olan degerini etkilemez.


class Basket<U> implements Collection<U> {
    private data: U[] = [];

    add(x:U) {
        this.data.push(x);
    }

    remove(y:U) {
        let index= this.data.indexOf(y);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }

    returnArray(): U[] {
        return this.data;
    }
}

let numbers: Collection<number> = new Basket();
numbers.add(11);
numbers.add(1907);
numbers.add(6);
numbers.remove(11);


let returnValue = numbers.returnArray();

// console.log('RETURN VALUE IS HERE', returnValue);



class Customer {
    firstName: string;
    lastName: string;

    constructor(name: string, surName: string) {
        this.firstName = name;
        this.lastName = surName;
    }
}

class FirstCustomer extends Customer {
    id: number;
    constructor(id:number, name, lastName) {
        super(name, lastName);
        this.id = id;
    }
}

function logCustomers<T extends Customer> (person: T): void {
    console.log(`${person.firstName} ${person.lastName} is our customer`)
}

// let customer = new FirstCustomer( 2, 'Doe', 'Jane');
let customer = new Customer(  'Doe', 'Jane');

logCustomers(customer);


// Eger bir Generic tip bir class veya interface ten kalitim (extends || implements) aldiysa
// o tipe atanabilecek her tip ayni class veya interfaceten kalitim almis olmak durumundadir.
// yani yukaridaki ornekteki gibi Customer veya FirstCustomer tipi bir veri alabirken string veya number veri alamaz.


interface Pair<T, U> {
    first: T;
    second: U;
}

let value: Pair<number, string> = {
    first: 1000,
    second: '1K',
}

let anotherValue: Pair<string, string> = {first: 'someStr', second: 'anotherStr'}

interface Command<T, R> {
    jobId: T;
    run(value: T): R
}

let jobRunner: Command<string, number> ={
    jobId: 'asdasdasf',
    run:function (value) {
        return 3
    }
}





