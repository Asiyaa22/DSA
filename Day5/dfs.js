
const { Stack } = require('../Session-2/2.js')
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

class Point {
    constructor(i, j) {
        this.x = i
        this.y = j
    }
    value(array) {
        return array[this.x][this.y]
    }
    change(array, value) {
        array[this.x][this.y] = value
    }
}

function countIslands(matrix) {
    let island = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const point = new Point(i, j)
            if (point.value(visited) == true) continue
            if (point.value(matrix) == 1) {
                island++
                DFS(matrix, point, visited)
            }
            point.change(visited, true)
        }
    }
    return island;
}

function DFS(matrix, startingPoint, visited) {
    const stack = new Stack()
    stack.push(startingPoint)
    console.log("STARTING POINT",startingPoint.x,startingPoint.y)
    while (!stack.isEmpty()) {
        const point = stack.pop()
        if (point.value(visited) != true) {
            console.log("DFS===",point.x,point.y)
            point.change(visited, true)
            const childs = extractChilds(point, matrix)
            for (let k = 0; k < childs.length; k++) {
                stack.push(childs[k])
            }
        }
    }
}
function extractChilds(point, matrix){
    let child = [
        new Point(point.x-1,point.y),
        new Point(point.x+1,point.y),
        new Point(point.x,point.y-1),
        new Point(point.x,point.y+1),
    ]
    let newChilds = child.filter(p=>{
        if(p.x<0 || p.x>=matrix.length) return false
        if(p.y<0 || p.y>=matrix[0].length) return false
        if(p.value(matrix)==0) return false
        return true
    })
    return newChilds
}

console.log(countIslands(b))
