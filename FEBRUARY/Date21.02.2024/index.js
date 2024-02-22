// function person (name) {
//     this.name = name;
//     this.sayhello = function () {
//         console.log("hello" , this.name);
//     }
// }

// var james = new person("sunil kumar");
// var john = new person("manjeet");

// james.sayhello();
// john.sayhello();

function Category (name,age,mobile,city) {
    this.Name= name,
        this.age = age,
        this.mobile = mobile,
        this.city=city
}
// console.log(Category("sunil", 20, 555455, "jaipur"));
// let newCatgory = new Category("sunil", 20, 555455, "jaipur");
// console.log(newCatgory);

let value = new Category("mohit", 25, 9598562356, "jaipur")
let value1 = new Category("mohit2", 27, 9598562356, "lucknow")
// console.log(value);
// console.log(value1);

function createPerson (name, age) {
    return {
        name: name,
        age: age,
    };
}

// Usage
console.log(createPerson("suhail",25))
const person2 = createPerson('Jane', 40);
console.log(person2);