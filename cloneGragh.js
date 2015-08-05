/**
 * Created by daisy on 2015/2/4.
 * review for loop /for in /for each
 * 自定义构造函数
 */
var UndirectedGraphNode = function (x) {
    this.label = x;
    this,neighbors = [];
};

var Queue = function () {
    var array = [];
    var MAX = 10;
    this.front = this.rear = 0;

    this.enqueue = function (x) {
        if (!this.isFull()) {
            array[this.rear] = x;
            this.rear = (this.rear + 1) % MAX;
        }
    };

    this.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        var value = array[this.front];
        this.front = (this.front + 1) % MAX;
        return value;
    };

    this.isEmpty = function () {
        return this.front === this.rear;
    };

    this.isFull = function () {
        return this.front === (rear + 1) % MAX;
    };
};

function cloneGragh(node) {
    if (node === null) {
        return null;
    }
    var clone = new UndirectedGraphNode(node.label);
    var map = [];
    var queue = new Queue();
    var isVisited = [];

    queue.enqueue(node);
    map[node.label] = new UndirectedGraphNode(node.label);

    while (!queue.isEmpty()) {
        var current = queue.dequeue();
        var neibors = current.neighbors;
        for (var i = 0, max = neibors.length; i < max; i++) {
            if (map[neibors[i]]) {
                map[current.label].neighbors.push(map[neibors[i]]);
            } else {
                var newNode = new UndirectedGraphNode(neibors[i].label);
                map[current.label].neighbors.push(newNode);
                map[newNode.label] = newNode;
                queue.enqueue(neibors[i]);
            }
        }
    }
    return map[node.label];
}
