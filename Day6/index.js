class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head  = null;
    }
    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            let temp = this.head;
            while(temp.next){
                temp = temp.next
            }
            temp.next = newNode
        }

    }
    print(){
        // let output = " "
        let temp = this.head
        while(temp.next){
            console.log(temp.value)
            temp = temp.next;
        }

    }
    delete(value){
        //case1
        if(!this.head)
            return;
        //case2
        if(this.head == value){
            this.head = this.head.next;
            return
        }
        //case 3
        let temp = this.head;
        while(temp.next){
            if(temp.next.value == value){
                temp.next = temp.next.next;
                return
            }
            temp = temp.next
        }
    }
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        while(current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}
const a = new LinkedList()
const b = new LinkedList()

a.append(3);
a.append(4);
a.append(100);
a.append(104)
a.append(14)
b.append(40)
b.append(40)
b.head.next = a.head.next.next.next
// a.head.next.next = a.head.next;
// a.print();
// a.reverse();
// a.print();
function hasCycle(){
    let x = a.head;
    let y = a.head;
    while(y!==null && y.next!=null){
        x = x.next;
        y = y.next.next;
        if(x==y){
            return true
        }
    }
    return false;
}
// console.log(hasCycle(a));

function findMiddle(){
    let slow = a.head;
    let fast = a.head;
    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.value;
}

// console.log(findMiddle(a));

function findIntersection(list1, list2){
    const set = new Set();
    let temp = list1.head
    while(temp!=null){
        set.add(temp);
        temp = temp.next;
    }
    temp = list2.head;
    while(temp!=null){
        if(set.has(temp)){
            return temp.value;
        }
        temp = temp.next
    }
    return null;
}
console.log(findIntersection(a, b));