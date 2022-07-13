const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                
doublerAppend(tinyArray);
let resultsAppend1 = perf.stop();  
perf.start();                    
doublerAppend(smallArray);
let resultsAppend2 = perf.stop();  
perf.start();                    
doublerAppend(mediumArray);
let resultsAppend3 = perf.stop();  
perf.start();                    
doublerAppend(largeArray);
let resultsAppend4 = perf.stop();  
perf.start();                    
doublerAppend(extraLargeArray);
let resultsAppend5 = perf.stop();  


// Try it with second function

perf.start();
doublerInsert(tinyArray);
let resultsInsert1 = perf.stop();
perf.start();
doublerInsert(smallArray);
let resultsInsert2 = perf.stop();
perf.start();
doublerInsert(mediumArray);
let resultsInsert3 = perf.stop();
perf.start();
doublerInsert(largeArray);
let resultsInsert4 = perf.stop();
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert5 = perf.stop();

console.log(`Results for the tinyArray which has a length of ${tinyArray.length}`);
console.log("insert", resultsInsert1.preciseWords);
console.log("append", resultsAppend1.preciseWords);

console.log(`Results for the tinyArray which has a length of ${smallArray.length}`);
console.log("insert", resultsInsert2.preciseWords);
console.log("append", resultsAppend2.preciseWords);
console.log(`Results for the tinyArray which has a length of ${mediumArray.length}`);
console.log("insert", resultsInsert3.preciseWords);
console.log("append", resultsAppend3.preciseWords);
console.log(`Results for the tinyArray which has a length of ${largeArray.length}`);
console.log("insert", resultsInsert4.preciseWords);
console.log("append", resultsAppend4.preciseWords);
console.log(`Results for the tinyArray which has a length of ${extraLargeArray.length}`);
console.log("insert", resultsInsert5.preciseWords);
console.log("append", resultsAppend5.preciseWords);


// NOTES
// insert takes longer than append
// extraLargeArray
// insert 1.3146133 s
// append 4.7845 ms

// tinyArray
// Results for the extraLargeArray
// insert 71.8 μs
// append 121.2 μs

// 1. addToZero runtime 142.8 μs
const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if((arr[i]+arr[j]) === 0){
                return(true)
            }
        }
    }
}

perf.start();
addToZero([2,-2,4,2,6,7,-7])
let resultsAddToZero = perf.stop();
console.log("addToZero runtime", resultsAddToZero.preciseWords);

// 2. hasUniqueChars runtime 14.5 μs
const hasUniqueChars = (arr) => {
    const arr1 = Array.from(arr)
    let ans = true
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr1[i]===arr1[j]){
                ans = false
            }
        }
    }
    return(ans)
}
console.log(hasUniqueChars("moonday"))
perf.start();
hasUniqueChars("moonday")
let hasUniqueCharsRuntime = perf.stop();
console.log("hasUniqueChars runtime", hasUniqueCharsRuntime.preciseWords);


// 3. panagrams runtime is 285.2 μs
const panagrams = (s) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram";
     }
    }
   
   return "pangram";
 }
 console.log(panagrams('abcdefghijklmnopqrstuvwxyz'))
perf.start();
 panagrams('abcdefghijklmnopqrstuvwxyz')
 let panagrams1 = perf.stop();
 console.log("panagrams runtime is", panagrams1.preciseWords);

// 4. findLongestWord runtime 620.1 μs

const findLongestWord = (arr) => {
    let ans = ''
    let k = 0
    for(let i = 0; i < arr.length; i++){
        k=0
        for(let j = 0; j < arr.length; j++){
            if(arr[j]>=arr[i]){
                k++
            }
        }
        if(k == arr.length){
            console.log(`${arr[i]} is longest at ${arr[i].length} letters long`)
        }
    }
}



perf.start();
findLongestWord(['hi', 'hello'])
let findLongestWordRuntime = perf.stop();
console.log("findLongestWord runtime", findLongestWordRuntime.preciseWords);
