// const { Queue } = require('../Session-2/2.js')
class Graph{
    constructor(){
        this.list = {}
    }
    addVertex(vertex){
        if(this.list[vertex]==undefined){
            this.list[vertex] = []
        }
    }
    addEdge(vertex1,vertex2){
        if(this.list[vertex1]!=undefined && this.list[vertex2]!=undefined){
            this.list[vertex1].push(vertex2)
            this.list[vertex2].push(vertex1)
        }
    }
    removeEdge(vertex1,vertex2){
        this.list[vertex1] = this.list[vertex1].filter(v=>v!=vertex2)

        this.list[vertex2] = this.list[vertex2].filter(v=>v!=vertex1)
    }
    removeVertex(vertex){
        while(this.list[vertex].length!=0){
            const adjacentVertex = this.list[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.list[vertex]
    }
}

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}

const b = [
    [1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 1]
]

let visited = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
]

function BFS(graph, start){
    const queue = new Queue()
    queue.push(start);
    console.log("STARTING POINT",startingPoint.x,startingPoint.y)
    while (!queue.isEmpty()) {
        const vertex = queue.pop()
        set.add(vertex);
        const childs = graph.list[vertex];
        for(let i = 0; i<childs.length; i++){
            if(!set.has(childs[i])){
                queue.push(childs[i]);
            }
        }

    }
}

       

const a = new Graph()
a.addVertex('A')
a.addVertex('B')
a.addVertex('C')
a.addVertex('D')
a.addVertex('E')
a.addVertex('F')
a.addVertex('G')
a.addVertex('H')
a.addVertex('I')
a.addVertex('J')
a.addEdge('A','B')
a.addEdge('C','B')
a.addEdge('A','D')
a.addEdge('E','D')
a.addEdge('E','F')
a.addEdge('G','F')
a.addEdge('I','F')
a.addEdge('I','J')
a.addEdge('G','H')

BFS(a,'D')