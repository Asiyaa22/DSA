class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
            return
        }
        let current = this.root
        while(true){
            if(value<current.value){
                if(current.left == null){
                    current.left = newNode;
                    break;
                }else{
                    current = current.left
                }
            }else{
                if(current.right == null){
                    current.right = newNode;
                    break;
                }else{
                    current = current.right
                }
            }
        }
    }

    inorderLoop(node){
        let stack = new Stack()
        let current = node;
        while(true){
            if(current){
                stack.push(current)
                current = current.left
            }else{
                if(stack.isEmpty()) break
                const node = stack.pop()
                console.log(value)
                current = current.right
            }
        }
    }
    preorder(node){
    if(node==null) return
    console.log(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
    }

    postorder(node){
        if(node==null) return
       
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
        }
    levelOrder(node){
        const queue = new Queue()
        queue.push(this.root)
        while(!queue.isEmpty()){
            const current = queue.pop()
            console.log(current.value)
            if(current.left) queue.push(current.left)
            if(current.left) queue.push(current.left)
        }
    }
    search(value){
        let current = this.root;
        while(current){
            if(current.value == value){
                return true
            }else{
                if(value<current.value){
                    current=current.left
                }else{
                    current=current.right
                }
            }
        }
        return false
    }
}






const a = new BST();
a.insert(50);
a.insert(8);
a.insert(200);
a.insert(4);
a.insert(22);
a.insert(30);
a.insert(60);
a.insert(250);
a.insert(225);
// a.preorder(a.root);
// a.postorder(a.root);
console.log(a.search(20));

