// // let day = "tuesday";
// // switch (day) {

// //     case "sunday":
// //         console.log("sunday is selcted")
// //         break;
// //     case "monday":
// //         console.log("monday is selcted")
// //         break;
// //     case "tuesday":
// //         console.log("tuesday is selcted")
// //         break;
// //     case "wednesday":
// //         console.log("wednesday is selcted")
// //         break;

// //     default:
// //         console.log("not a valid day from select day")
// // }

// let day = "friday";
// switch (day) {
// case "sunday":
// case "monday":
// case "tuesday":
// case "wednesday":
// console.log(`this is the ${day} which is selected `)
//         break;

//     default:
//         console.log("not a valid day from select day")
// }

// let gender = "male";
// age = 21;

// switch (true) {
//     case ((gender=="male" && age>=21) || (gender=="female" && age>=18)):
//         console.log("married");
//         break;

//     default:
//         console.log("Unmarried");
//         break;
// }

// // if((gender=="male" && age>=21) || (gender=="female" && age>=18)){
// //     console.log("can go Married");
// //     }else{
// //         console.log("can not Married");
// //     }

// let operation = 12;
// switch (operation) {
//   case 1:
//     console.log("operation 1 is selected");
//     break;
//   case 2:
//     console.log("operation 2 is selected");
//     break;
//   case 3:
//     console.log("operation 3 is selected");
//     break;

//   default:
//     console.log("case is not match in list operation");
// }

// let value=1;
// switch(value){
// case 1:

// case 2:

// case 3:
//     break;
// case 4:
//     console.log(`this is selected ${value}`)
//     break;
//     default:
//         console.log("value is not in list")
// }

function city (city) {
    city == "jaipur"
        ? console.log("this is pink city")
        : city == "Delhi"
            ? console.log("this is most polluted city")
            : console.log("this is not pink city");
}
city("Delhi")
