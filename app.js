// make fun use js
const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];
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

const filterArray = arr.filter((v) => typeof v == 'number');
console.log(filterArray)