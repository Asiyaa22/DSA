let count = 0;
function recurse(){
    count ++;
    console.log(count);
    recurse();
}

// recurse();

// ==> Stack DataStructure

// Methods of stack
// Push
// peek
// pop
// isEmpty

class stack {
    constructor(){
        return this.data = [];
    }
    push(num){
        return this.data.push(num);
    }
    pop(){
        return this.data.pop();
    }
    peek(){
        return this.data[this.data.length-1];
    }
    isEmpty(){
        return this.data.length == 0;
    }
}

let s = new stack();

s.push(2);
s.push(3);

// console.log(s.pop());
// console.log(s.data);

// ==> Queue

// ==> Recursion

function recurse(str){
    let sum = 0;
    const arr = str.split('');
    let num = Number(arr[i]);
    if(isNaN(num)) return -1;
    else return sum = sum + recurse(str);
}

console.log(recurse("124"));