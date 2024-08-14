// Problem 1
function countEvenOddDigits(n){
    let countEven = 0;
    let countOdd = 0;
    // let digits = n.toString().split('');
    let digits = Array.from(String(n), Number);
    for(let digit of digits){
        if(digit % 2 == 0){
            countEven += 1;
        }else{
            countOdd += 1;
        }
    }
    return { even: countEven, odd: countOdd}
}

console.log(countEvenOddDigits(123456)); //Test Case-1 
// console.log(countEvenOddDigits(111111)); Test Case-2 
// console.log(countEvenOddDigits(246802)); Test Case-3
// console.log(countEvenOddDigits(0)); Test Case-1 

// Problem 2
function secondLargest(arr){
    if(arr.length < 2){
        throw new Error("Array must contain atleast two elements.");
    }
    let largestEle = -Infinity;
    let secondLargestEle = -Infinity;
    for (let i = 0; i<arr.length; i++){
        if(arr[i] > largestEle){
            secondLargestEle = largestEle;
            largestEle = arr[i];
        } else if(arr[i] > secondLargestEle && arr[i] < largestEle){
            secondLargestEle = arr[i];
        }
    }
    return secondLargestEle;
}
// try {
// console.log(secondLargest([1, 2, 3, 4, 5])); //Test Case-1
// console.log(secondLargest([10, 5, 10])); //Test Case-2
// console.log(secondLargest([-1, -2, -3, -4])); //Test Case-3
// console.log(secondLargest([5])); //Test Case-4
// }catch (e){
//     console.error(e.message);
// }


//Solution By Binary Search Algo
function secondLargest(arr){
    if(arr.length<2){
        throw new Error("Array must contain atleast two Elements");
    }
    //sorting array inn descending order
    arr.sort((a, b) => b - a);
    // now after sorting the secondLargest Element is at first index of Array
    return arr[1];
   
}
// try{
// console.log(secondLargest([1, 2, 3, 4, 5])); //Test Case-1
// console.log(secondLargest([10, 5, 10])); //Test Case-2
// console.log(secondLargest([-1, -2, -3, -4])); //Test Case-3
// console.log(secondLargest([5])); //Test Case-4
// }catch (e) {
//     console.error(e.message);
// }

// Problem 4
// Solution 
function flattenArray(arr){
    let result = [];
    function flat(subArray) {
        for (let items of subArray) {
            if (Array.isArray(items)) {
                flatten(items);
            } else {
                result.push(items);
            }
        }
    }

    flat(arr);
    return result;
}

// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));
// console.log(flattenArray([[1], [2,[3, [4]]]]));
// console.log(flattenArray([1, 2, 3]));
// console.log(flattenArray([]));


// problem 6
function countVowels(str) {
    //Defining vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    let arr = str.toString().split('');
    for(let i = 0; i<arr.length; i++){
        if(vowels.has(arr[i])){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("hello")); //Test Case-1 
// console.log(countVowels("world")); //Test Case-2

// problem 5
function longestWord(sentence){
  if(sentence == "") return "";
  let words =sentence.split(/\s+/).filter(word => word.length > 0);
  let longWord = "";
  for(let word of words){
    if(word.length > longWord.length){
        longWord = word;
    }
  }
  return longWord;
}
// console.log(longestWord("The quick brown fox jumps over the sky"));//Test Case-1
// console.log(longestWord("hello World"));//Test Case-2
// console.log(longestWord("A"))Test Case-3
// console.log(longestWord(""))Test Case-4

// function longestWord1(str){
//     if( str == "") return str;
// }
// let result = longestWord1("");
// console.log(result);




