// Amazon
// function getProduct(n)
// {
// var arr = ["earphone", "headphone", "ipad","phone"];
// if(n<0){
// return null;
// }
// return arr[n];
// }

// var result = getProduct(3);
// if(result == null){
// console.log("Invalid Input");
// }
// console.log(result);

// let user={
//     name:"sunil",
//     age:25,
//     gender:"male",
//     mobile:9598125005,
//     city:"jaipur",
//     marks:[25,36,40,78,100],
//     personalInfo:{
//      fathername:"xyz",
//      fmobile:95986936212,
//      fdata:"jaipur",
//      value:[1,2,3,4]
//     }
// }

// for(let i=0;i<user.length;i++){

//     console.log(user[i]);
// }

// let keys = Object.keys(user);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     let key = keys[i];
//     console.log(key, user[key]);
// }
// for(let value in user){
//     console.log(user[value])
// }

// let userData = {
//     name: "Sunil Kumar Kumawat",

//     Mobile_Number: 8209277800,
//     City: "Jaipur",
//     State: "Rajasthan",
//     data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
// };
// delete userData.age
// userData.age = 75;
// userData.data[userData.data.length] = 1200
// userData.data.push(1000011)
// console.log(userData);

// obj.email = "skkumar1997@gmail.com";
// console.log(obj);
// console.log(obj.age);
// console.log(obj.data[0]);

// console.log(obj["age"]);
// console.log(obj["data"][0]);
// console.log(obj["email"]);
// for(let key in obj){
//     console.log(key,obj[key]);
// }

// let arr = [24, 33, 77];
// arr.forEach((val) => console.log(val));

// for (val of arr) {
//     console.log(val);
//



// let userData = {
//     name: "Sunil Kumar Kumawat",

//     Mobile_Number: 8209277800,
//     City: "Jaipur",
//     State: "Rajasthan",
//     data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
// };


// for (let key in userData) {
//     console.log(key)
// }




// IW Problem1
// var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupak"];

// var party = [];
// var present = false;
// for (var i = 0; i < arr.length; i++) {



//     for (var j = 0; j < party.length; j++) {
//         if (arr[i] == party[j]) {
//             present = true;
//             break;
//         }
//     }
//     if (present == false) {
//         party.push(arr[i]);
//     }
//     else {
//         present = false;
//     }
// }
// console.log(party);


// var uniqueParty = [...new Set(arr)];

// console.log(uniqueParty);

// var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupa"];
// let obj = {};
// for (let i = 0; i < arr.length; i++){
//     obj = arr[i]
//     if (obj[arr[i]] === undefined) {
//     obj[arr[i]]=1
//     } else {
//         obj[arr[i]]++
//     }
//     console.log(obj);
// }

var arr = ["Ramesh", "Suresh", "Ramesh", "Kamlesh", "Suresh", "Rupa"];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    let name = arr[i];

    if (obj[name] === undefined) {
        obj[name] = 1;
    } else {
        obj[name]++;
    }
}

console.log(obj);


