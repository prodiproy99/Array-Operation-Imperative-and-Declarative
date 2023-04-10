const numbers = [2, 4, 6, 7, 8, 10];
// let sum = 0;
// for(let i = 1; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum)
let sum = 0;
numbers.forEach(function(v, i){
   if(i < 3){
    sum += v;
   }
})
console.log(sum)