// Palindrome

function isPalindrome(n){
    n = String(n).split('');
    if(n.length === 1)  return true;
    let middle = 0 + n.length / 2;
    for(let i = 0;i<middle; i++){
        if(n[i]=n[n.length-1-i]) return false;
    }
    return true;
}

function isPrime(num) {
if (num == 1) return true;

for (let i = 2; i<Math.sqrt(num); i++){
    if(num % i == 0) return false;
}
return true;
}


// console.log(isPrime(5));

function isPresent(arr, x){
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = Math.floor(low + high/2);
        if(arr[mid] === x) return true;
        if(arr[mid]<x){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return false;
}

console.log(isPresent([1, 2, 3, 4,5 , 6], 1));