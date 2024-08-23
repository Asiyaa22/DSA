class ReturnList{
    constructor(value = 0){
        this.value = value;
        this.next = null;
    }
}
//function to add Two Numbers
function addTwoNumbers(l1, l2){
    let dummy = new ReturnList();
    let current = dummy;
    let carry = 0;

    while(l1 !== null || l2 !== null){
        let x, y;
        if(l1 !== null){
            x = l1.value;
        }else{
            x = 0;
        }
        if(l2 !== null){
            y = l2.value;
        }else{
            y = 0;
        }
        
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ReturnList(sum % 10);
        current = current.next;
         
        //Moving to the next nodes in the list

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0){
        current.next = new ReturnList(carry);
    }
    return dummy.next;
}

function arrayTolist(arr){
    let dummy = new ReturnList();
    let current = dummy;
    arr.forEach(value => {
        current.next = new ReturnList(value);
        current = current.next;
    });
    return dummy.next;
}

// Helper function to convert a linked list to an array (for easy display)
function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.value);
        list = list.next;
    }
    return arr;
}
let l1 = arrayTolist([2, 4, 3]); // Represents the number 342
let l2 = arrayTolist([5, 6, 4]); // Represents the number 465

let result = addTwoNumbers(l1, l2);
console.log(listToArray(result));
