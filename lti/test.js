console.log(1);
setTimeout(() => {
    console.log(2)
}, 1000)
let result=new Promise((resolve,reject)=>{
    resolve(3)
})
console.log(result)
console.log(4)
// 1
// 3
// 4
// 2