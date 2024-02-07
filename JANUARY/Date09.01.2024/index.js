

// let a =0;
// while (a<=10) {
//     if(a==5){
//         break;
//     }
//     a++;
//     console.log(a);
// }
// let bag="";
// for(let i=5;i>0;i--){
//     bag=bag+i+" "
// }
// console.log(bag);




// let fact=1;
// for(let i=1;i<=4;i++){
//     fact=fact*i//1=>0
// }
// console.log(fact)

// var count = 1;
// for(let i= 1;i<10;i++){
//     if(i==5){
//        continue;
//     }
//   count++;

// }
// console.log(count)


// Q : 1 write a program to print all even numbers when the value of number is 30 . so make programing using for loop


// for (let i=0; i<=30; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Q : 2 write a program to print all odd numbers when the value of number is 19 . so make programing using for loop

// for (let i=0; i<=19; i++){
//     if(i%2==1){
//         console.log(i);
//     }

// }


// Q : 3 write a program to print all sum of even numbers when the value of number is 20. so make programing using for loop

// let sum = 0;
// for (let i=0; i<=20; i++){
//     if(i%2==0){
//         sum = sum+i
//         // console.log(i);
//     }
// }
// console.log(sum);

// Q :4 write a program to print all sum of odd numbers when the value of number is 20. so make programing using for loop
// let sum = 0;
// for (let i=1; i<=10; i++){
//     if(i%2==1){
//         sum = sum+i
//         // console.log(i);
//     }

// }
// console.log(sum);



// Q :5 Print A table of 5 Using for loop
// let num = 5;
// for(let i=1; i<=10; i++){
//     let result = num*i;
//     console.log(`${num} * ${i} = ${result}`);
// }

// Q :6 write a program to print output in reverse manner when the number is 5 . so make a program using for loop .(example 5 4 3 2 1)

// let example = " ";
// for(let i=5; i>=1;i--){
//     example = example+ " "+i;
// }
// console.log(example )

// Q : 7 write a program to print factorial of 7 . So make program using for loop

// var fact = 1;
// for (let i =1; i<=7; i++){
//     fact = fact *i;
//     console.log(fact);
// }

// let num = 7;
// let i = 1;
// let fact = 1;
// for (i; i<=num;i++){
// fact = fact*i;
// }
// console.log(fact);


// Q : 8 write a program to print the sum of first 5 even Number.

// let i= 1;
// let num = 10;
// let sum = 0;
// for(;i<=num;num++){
//     if (num === 20 || i==6 ) {
//         break;
//     }
//     i++;
//     console.log(num);
// }


// let count = 0;
// let sum = 0;
// for(let i=1; i<=30; i++){
//     if(i%2==0){
//         count++;
//         sum = sum +i;
//         if(count==5){
//             break;
//         }
//     }
// }
// console.log(sum);

// function sum(stratNumber) {
//     // let stratNumber = 10;
//     let count = 0;
//     let sum = 0;
//     for (let i = stratNumber; count < 5; i++) {
//         if (i % 2 == 0) {
//             sum = sum + i;
//             count++
//             console.log(i);
//         }
//     }
// }
// // console.log(sum);
// sum(11)



// function sum(num){
//     let count =0;
//     let sum = 0;
//     for(num; count<5;num++){
//         if(num%2==0){
//             sum = sum +num;
//             count++
//         }
//     }
//     console.log(sum);
// }
// sum(10)



// Q : 9 write a program to print the sum of first 5 odd numbers ;

// function odd_sum(num){
//     let count = 0;
//     let sum_of_odd = 0;
//     for(num;count<5;num++){
//         if(num%2==1){
//             sum_of_odd = sum_of_odd+num;
//             count++;
//         }
//     }
//     console.log(sum_of_odd);
// }

// odd_sum(10);


// let count = 0;
// let sum = 0;
// for(let i=0;i<=20;i++){
//     if(i%2==1){
//         sum = sum+i;
//         count++;
//         if(count==5){
//             break
//         }
//     }
// }
// console.log(sum);

// let num =21;
// let sum = 0;
// for(let i =0; i<5;i++){
//     sum = sum+num;
//     num = num+2;
//     console.log(num);
// }
// // console.log(sum);


// Q : 10 write a progarm to print the sum of given number when the number is 30 and stop loop when the number value is 20.

let number = 30;
for(let i= 1; i<=number;i++){
    console.log(i);
    if(i==20){
        break;
    }
}