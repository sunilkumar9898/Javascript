// class vehicle {
//     constructor (name, model, type, price) {
//         this.name = name;
//         this.model = model;
//         this.type = type;
//         this.price = price

//     }
// }

// class mohan extends vehicle {
//     constructor (name, model, type, price, tyre, metal) {

//         super(name, model, type, price);
//         this.tyre = tyre;
//         this.metal = metal
//     }
// }
// class final extends mohan {
//     constructor (name, model, type, price, tyre, metal,years) {

//         super(name, model, type, price, tyre, metal);
//         this.years = years;

//     }
// }

// let value = new final("Suzuki", 2010, "petrol", 52000,14,"iron",2024)
// // let value2 = new mohan("Tata", 2018, "disel", 85000, 14, "iron and steel")
// console.log(value);
// console.log(value2);
// const vehicle1 = new vehicle("tata", "tigor", "disel", 45000);
// const vehicle2 = new vehicle("maruti", "bolero", "disel", 55000);
// console.log(vehicle1)
// console.log(vehicle2)
// console.log(emp1.name);
// console.log(emp1.age);

// class clothes {
//     constructor (brand, price, size, agegroup) {
//         this.brand = brand,
//             this.price = price,
//             this.size = size,
//             this.agegroup = agegroup
// }
// }

// let value = new clothes("jins", 200, 55, 12);
// console.log(value);
// class food extends clothes{
//     constructor (brand, price, size, agegroup, sex) {

//         super(brand, price, size, agegroup, sex)
//         this.sex= sex

//     }
// }

// let value1 = new food("shirt", 5000, "xxl", 15, "male");
// console.log(value1);

// //  Factory Function In javascript

// function shoes (brand,price) {
//     return {
//         brand: brand,
//         price:price
//     }
// }

// console.log(shoes("Nike",25));

// Constructor Function
let arr=[]
function Vahicle (SrNo, rollNo, classes, school, city) {
    this.SrNo = SrNo;
    this.rollNo = rollNo;
    this.classes = classes;
    this.school = school;
    this.city = city;
}
function Vahicle1 (SrNo, rollNo, classes, school, city) {
    this.SrNo = SrNo;
    this.rollNo = rollNo;
    this.classes = classes;
    this.school = school;
    this.city = city;
}
let value = new Vahicle(1, 21, "Kg", "mohan public school", "jaipur")
let value1 = new Vahicle(2, 212, "NC", "munnu public school", "Delhi")
let value2 = new Vahicle1(2, 210, "NC1", "munnutuuyu public school", "Delhi")
// arr.push(value,value1,value2)
// console.log(arr);



function Person (SrNo, rollNo, classes) {
    return {
        SrNo: SrNo,
        rollNo: rollNo,
        classes:classes
}
}
let data = Person(1, 10, "nc")
let data1 = Person(2, 11, "10th")
// arr.push(data, data1)
// console.log(arr);
// console.log(data,data1);


class shoes1 {
    constructor (name,price,brand) {
        this.name = name;
        this.price = price;
        this.brand=brand
    }
}
class cricket extends shoes1{
    constructor (name, price, brand, type,year) {
        super(name, price, brand)
        this.type = type;
        this.year=year
    }
}
let newShoes = new cricket("Running Shoes", 25000, "Nike","zoom",2023)
let newShoes1 = new cricket("Sports Shoes", 2000, "Puma","sports",2024)
console.log(newShoes,newShoes1);