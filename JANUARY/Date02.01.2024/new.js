// marks=33 =>third division
// marks below 33 Fail
// marks 34 to 45 second
// marks above 45 toper

// function result(marks) {
//   if (marks == 33) {
//     console.log("Third division");
//   } else if (marks >= 34 && marks <= 45) {
//     console.log("Second division");
//   } else if (marks > 45) {
//     console.log("Topper");
//   } else {
//     console.log("Fail");
//   }
// }
// result(45);

let a=6;
let b=3;
if(a>b){     //6=>3=>output ==true
  if(b>a){   //3=>6=>output false  
    console.log("both are true")
  }else{
    console.log("not valid")
  }
}
