//  Let's began start javascript Array


// let Array = ["sunil", "manjeet Singh",  "Ramu Singh"];
// console.log(Array.length);
// console.log(Array[2]);


// let price = [10,20,30,40,50,60];
// let a = price.length-1;
// console.log(a);
// console.log(price[a]);
// for(let i=0;i<=price.length-1;i++){
//     if(i==5){
//         console.log(price[i]);
//     }
// }

// let arr = [10,20,30,40,50,60,7,80,90];
//  arr.push("ram");
//  arr.pop([2])
//  console.log(arr);

// let array = [1,2,3,4,5,6];
// // console.log(array);
// // array.pop()
// // array.pop()
// // array.pop()
// // console.log(array);
// let bag = ' ';
// for(let i=0; i<=array.length-3;i++){

//     console.log(array[i]);
// }

// let a = [1,2,3,4,5,6,7,8,9];
// let bag = ' ';
// for(let i=0; i<a.length;i++){
//     bag = bag+ a[i] + " ";
//     if(i==2){
//         break;
//     }
// }
// console.log(bag);



var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man","hulk","thor"];
for(var i = 0; i<movies.length; i++)
{
if(i==2 || i==4)
{
continue;
}
console.log(movies[i]);
}


