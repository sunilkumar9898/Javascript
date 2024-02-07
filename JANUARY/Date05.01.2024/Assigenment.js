// // Q: 1 Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// // ANS:-

// // let age = 99;
// // if (age < 12) {
// //     console.log("The Ticket Price Is 5");
// // } else if (age >= 12 && age < 18) {
// //     console.log("The Ticket Price Is 10");
// // } else if (age >= 18 && age < 60) {
// //     console.log("The Ticket Price Is 20");

// // } else if (age >= 60) {
// //     console.log("The Ticket Price Is 15");

// // } else {
// //     console.log("Please Provide Right Details");

// // }

// function TicketPrice (age) {
//     if (age < 12) {
//         console.log("The Ticket Price Is 5");
//     } else if (age >= 12 && age < 18) {
//         console.log("The Ticket Price Is 10");
//     } else if (age >= 18 && age < 60) {
//         console.log("The Ticket Price Is 20");

//     } else if (age >= 60) {
//         console.log("The Ticket Price Is 15");

//     } else {
//         console.log("Please Provide Right Details");

//     }
// }
// TicketPrice(22)


// // Q: 2 Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0


// // ANS:-

// // let price = 44;
// // if (price >= 100) {
// // console.log("20% Discount On Original Price")
// // } else if (price >= 50) {
// //     console.log("10% Discount On Original Price");
// // } else {
// //     console.log("0% Discount On Original Price");
// // }

// function discount (price) {
//     if (price >= 100) {
//     console.log("20% Discount On Original Price")
//     } else if (price >= 50) {
//         console.log("10% Discount On Original Price");
//     } else {
//         console.log("0% Discount On Original Price");
//     }
// }
// discount(20);


// // Q: 3Write a simple number guessing game.Provide a secret number and a guess.Based on those numbers give players clues if their guess is higher, lower or correct.
// // ANS:-
// // let decideNumber = 11;
// // if (decideNumber > 10) {
// //     console.log("Your Guess Is Higher");
// // } else if (decideNumber < 10) {
// //     console.log("your Guess is Lower");
// // } else if (decideNumber == 10) {
// //     console.log("Your Guess Is Equal or Correct");
// // } else {
// //     console.log("Not Correct");
// // }

// function guess (decideNumber) {
//     if (decideNumber > 10) {
//         console.log("Your Guess Is Higher");
//     } else if (decideNumber < 10) {
//         console.log("your Guess is Lower");
//     } else if (decideNumber == 10) {
//         console.log("Your Guess Is Equal or Correct");
//     } else {
//         console.log("Not Correct");
//     }
// }
// guess(9)

//  //Q :4 // Write a program that calculates the Body Mass Index(BMI) and categorizes it.The formula for BMI is: weight / (height * height).

// //print
// // Underweight category BMI ===20-30
// // Normal weight category BMI ==31-40
// // Over weight category BMI  above==41
// // default condition you are Obese.

// // ANS____

// // function bmi (weight,height) {
// //     if ((weight/(height*height))>=20 && (weight/(height*height))<=30) {
// //         console.log("Underweight category BMI AND Value 20-30");
// //     } else if ((weight / (height * height)) >= 31 && (weight / (height * height)) <= 40) {
// //         console.log("Normal weight category BMI ==31-40");
// //     } else if ((weight / (height * height)) > 41) {
// //         console.log("Over weight category BMI  above==41");
// //     } else {
// //         console.log("default condition you are Obese.");
// //     }
// // }

// // bmi(80, 2);


// function bmi (weight, height) {
//     let height1= height*0.3048;
    // let category;
    
//     let bmi1 = weight / (height1 * height1);
//     if (bmi1 >= 20 && bmi1 <= 30) {
//         category="under weight"
//         console.log(`Category is ${category}  and bmi is   ${bmi1}`);
//     } else if (bmi1 >= 31 && bmi1 <=40) {
//         category = "NORMAL weight"
//         console.log(`Category is ${category} and bmi is ${bmi1}`);
//     } else if (bmi1 >= 41) {
//         category = "OVER weight "
//         console.log(`Category is ${category} and bmi is ${bmi1}`);
//     } else {
//         console.log("you are obese");
//     }
// }

// bmi(80, 5);   

// let a = 10;
// console.log(a+"line-139 A ki value");
// let c =a++;
// console.log(c+" line-141 C ki Value");
// console.log(a+" line-142 A ki value");

// let d = ++c;

// console.log(c+" line-146 C ki Value");
// console.log(d  +" line-147 D ki Value");
// let e = c++;
// console.log(e ,c);

// console.log(a,c);


