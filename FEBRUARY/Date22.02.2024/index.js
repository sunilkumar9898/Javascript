// let creatPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Hello Promise");
//         resolve()
//     }, 2000);
// })


// creatPromise.then(() => {
//     console.log("Hello Ramu Singh From Jaipur");
// })

// let creatPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let value = 20;
//         if (value>50) {
//         console.log("ok");
//         }
//         else {
//             console.log("Oh sheet ");
//         }
//     }, 2000);
// })


// creatPromise.then((data) => {
//     console.log(data);
// }).catch((error) => {
// console.log(error);
// })



// new Promise(function (resolve, reject){
//     setTimeout(() => {
//         let a = 20;
//         if (a > 10) {
//             resolve({name:"sunil Kumar",age:25,city:"Jaipur",state:"Rajasthan"})
//         } else {
//             reject("Hello Sunil value is not match")
//         }
// })
// }).then((user) => {
//     return user
// }).then((data) => {
// console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Somthing went Rong");
// })




const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ name: "sunil kumar", pass: 123456789 });
        } else {
            reject("hello");
        }
    }, 1000);
});

// async function resolvePromise () {
//     try {
//         let res = await promiseFive;
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// resolvePromise()

