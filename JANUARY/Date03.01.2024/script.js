// Q : 1 Odd Even Number Check

// function checkNumber(number){
//     if(number%2==0){
//         console.log("Number is Even");
//     }
//     else{
//         console.log("number is Odd");
//     }
// }
// checkNumber(98);

// Q:2 Write a Javascript Programe that takes a students score as input . If the score is greater than or equal to 90, the program should display "A" , If the score is betyween 80 to 89 display "B" for score between 70 to 79 display "C" any score below 70 should display "Fail"

// function CheckResult(marks){
//     if (marks>=90){
//         console.log("A");
//     }
//     else if(marks>=80 && marks<=89){
//         console.log("B");
//     }
//     else if(marks>=70 && marks<=79){
//         console.log("C");
//     }
//     else if(marks<70){
//         console.log("Fail");
//     }

//     else{
//         console.log("Please enter Correct Information");
//     }

// }

// CheckResult(90);

//   Q:3  Age 12 Years old or younger price = 100
//         Age between 13 And 18 include price = 200
//         Age Above 18 price 250

// function CheckTicketPrice(age){
//   if(age<=12){
//     console.log("Ticket Price IS 100");
//   }else if(age>=13 && age<=18){
//     console.log("Ticket Price Is 200");
// }else if(age>18){
//     console.log("Ticket Price Is 250");
// }
// else{
//     console.log("Please input correct Age");
// }
// }

// CheckTicketPrice(15);

// Q : 4 Wheather 32 degree below "Wear Coat"
//       Wheather between 32 to 50 degree "Wear a Jacket"
//       Wheather Above 50 "Enjoy The Whether"

// function Wheather(degree){
//     if(degree<32){
//         console.log("Wear Coat");
//     }
//     else if(degree>=32 && degree<=50){
//         console.log("Wear jacket");
//     }
//     else if(degree>50){
//         console.log("Enjoy The Wheather");
//     }
//     else{
//         console.log("Please enter correct Information");
//     }
// }
//  Wheather(51);

Q: 5;
//  function CheckLeapyear(year){
//     if((year % 100 !== 0 && year%4 === 0) || (year%400 ===0)) {
//         console.log(year + " "+ "Is leap Year");
//     }else{
//         console.log(year + " "+ "Not A leap Year");

//     }
//  }
//  CheckLeapyear(1804);

// Examples

let a = 1000;
let b= 200;
let c =80;
let d = 40;

if(a>b && a>c && a>d){
    console.log("A is Grater");
}
else if(b>a && b>c && c>d){
    console.log("B Is Greater");
}
else if(c>a && c>b && c>d){
    console.log("C Is Greater");
}else if(d>a && d>b && d>c){
    console.log("D Is Greater");
}



//    Check Greatest Number 


let w = 5;
let x = 60;
let y = 700;
let z = 100;

if (w > x) {
  if (w > y) {
    if (w > z) {
      console.log(w);
    }  
  }
}
if (x > w) {
  if (x > y) {
    if (x > z) {
      console.log(x);
    }
  }
}
if (y > w) {
  if (y > x) {
    if (y > z) {
      console.log(y);
    }
  }
}
if(z > w) {
  if (z > x) {
    if (z > y) {
      console.log(z);
    }
  }
}







