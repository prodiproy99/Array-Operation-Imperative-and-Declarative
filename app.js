// make fun use js
// const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];
// let count = 0;
// for(i = 0; i < arr.length; i++){
//     for(j = 1; j < arr.length - 1; j++){
//        if(!arr[j] || typeof arr[j] != 'number'){
//         arr[j] = arr[j + 1];
//         arr[j + 1] = undefined;
//        }
//     }
//     if(arr[i] == undefined){
//         count++;
//     }
// }

// arr.length -= count;
// console.log(count, arr)

// const filterArray = arr.filter((v) => typeof v == 'number');
// console.log(filterArray)



// How to increase value from Array
const arr = [
    {id: 1, value: 10},
    {id: 2, value: 20},
    {id: 3, value: 30},
    {id: 4, value: 40},
    {id: 5, value: 50},
    {id: 6, value: 60},
]

const obj2 = arr[2];
obj2.value = 300;
// const index = arr.findIndex(function(v) {
//     return v.id == 4;
// });
// arr[index].value = 400;
// console.log(arr);

const obj = arr.find(function(v){
    return v.id == 4;
})

obj.value = 400;
// console.log(obj)
console.log(arr)

const a = {a: 10};
b = {b: 10};
const c = a;
console.log(a == c);