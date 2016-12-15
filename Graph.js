import {Queue} from './Queue';
import {Stack} from './Stack';

function Graph() {
    var vertices = []; //{1}
    var adjList = new Map(); //{2}

    this.addVertex = function (v) {
        vertices.push(v); //{3}
        adjList.set(v, []); //{4}
    };

    this.addEdge = function (v, w) {
        adjList.get(v).push(w); //{5}
        adjList.get(w).push(v); //{6}
    };

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) { //{10}
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]); //{11}
            for (var j = 0; j < neighbors.length; j++) { //{12}
                s += neighbors[j] + ' ';
            }
            s += '\n'; //{13}
        }
        return s;
    };

    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white'; // All vertices have the color white
        }
        return color;
    };

    this.bfs = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [], // declare d which represents the distances
            pred = []; // the predecessor array
        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) { // loop through each vertice
            d[vertices[i]] = 0;  // initialise distance to 0 for every vertice
            pred[vertices[i]] = null; // initialize pred to 0 for each vertice
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue();
            let neighbours = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbours.length; i++) {
                var w = neighbours[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;  // Increment the distance between w and u
                    pred[w] = u; // set the pred of w as u
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    };

    this.dfs = function(callback) {
        var color = initializeColor(); // Initialise the color array

        for(var i = 0; i< vertices.length; i++){ // loop through vertices
            if (color[vertices[i]] === 'white'){ // for each non visited
                dfsVisit(vertices[i], color, callback); // call dfsVisit
                // passing the vertex , color array and calback
            }
        }
    };

    var dfsVisit = function(u, color, callback) {
        color[u] = 'grey'; // set the vertice as discovered
        if(callback){
            callback(u); // executre a callback here to say what we have
            //visited
        }

        var neighbours = adjList.get(u); // get the neighbours of the vertix
        for(var i = 0; i < neighbours.length; i++){ // for each neighbor
            var w = neighbours[i];
            if (color[w] === 'white'){ // set the vertex as visited
                dfsVisit(w, color, callback); // recursively visit the children
            }
        }
        color[u] = 'black'; // vertex is explored
    };

    var time = 0; // declare a variable for time
    
    this.DFS = function() {
        var color = initializeColor(),
            d = [],
            f = [],
            p = [], // declare d f and p arrays and intialise
            time = 0;

        for (var i = 0; i < vertices.length; i ++){
            f[vertices[i]] = 0;// initialize d f and p for each vertix
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for (i = 0; i < vertices.length; i++){
            if (color[vertices[i]] === 'white'){
                DFSVisit(vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d, // return them to work with them later
            finished: f,
            predecessors: p
        };
    };

    var DFSVisit = function(u, color, d, f, p){
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time; // when a vertex is first discovered track its discovery time
        var neighbours = adjList.get(u);  //get the neighbours

        for(var i = 0; i < neighbours.length; i++){
            var w = neighbours[i];
            if (color[w] === 'white'){ // for not visited vertices
                p[w] = u; // set the predessor
                DFSVisit(w, color, d, f, p);
            }
        }

        color[u] = 'black';
        f[u] = ++time; // track the finsished exploring time
        console.log('explored ' + u);
    };

    // this.bfs = function (v, callback) {
    //     var color = initializeColor(), // initialize color array with white
    //         queue = new Queue(); // create new queue
    //     queue.enqueue(v); // The vertex that is point of origin
    //
    //     while (!queue.isEmpty()) { // check if the queue is not empty
    //         var u = queue.dequeue(); // remove vertex by dequeeing
    //         let neigbours = adjList.get(u); // get the vertex's neigbours
    //         color[u] = 'grey'; // mark vertex dequed as discovered (not explored)
    //         for (var i = 0; i < neigbours.length; i++) { // loop thru each neighbour
    //             var w = neigbours[i]; // get the value of the neighbours
    //             if (color[w] === 'white') { // If not visited yet
    //                 color[w] = 'grey'; // set it to discovered
    //                 queue.enqueue(w); // add the vertex to the queue
    //             }
    //
    //         }
    //         color[u] = 'black'; // vertex can be marked as explored
    //         if (callback) {
    //             callback(u);
    //         }
    //     }
    // };
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
for (var i = 0; i < myVertices.length; i++) { //{8}
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

function printNode(value) {
    console.log('Visited vertex: ' + value);
}

//graph.bfs(myVertices[0], printNode);

// var shoretestPathA = graph.bfs(myVertices[0]);
// // console.log(shoretestPathA);
//
// var fromVertex = myVertices[0]; // Use vertice A as source vertex A
//
// for (var i = 1; i < myVertices.length; i++) { // for every other vertex except A
//     // calculate the path from vertex A to it
//
//     var toVertex = myVertices[i], // get the vertice
//         path = new Stack(); // create a stack to store the path
//     for (var v = toVertex; v!== fromVertex;
//     v=shoretestPathA.predecessors[v]) {
//         console.log('toVertex', toVertex);
//         console.log('predecessor', v);
//         path.push(v);
//         console.log('After push');
//     }
//     console.log('fromVertext', fromVertex);
//     path.push(fromVertex);
//     var s = path.pop();
//     while(!path.isEmpty()){
//         s += ' - ' + path.pop();
//     }
//     console.log(s);
// }
graph.DFS(printNode);