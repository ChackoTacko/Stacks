class StandardArrayStack {
    constructor(size) {
        this.stack = new Array(size);
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    push(data) {
        if (this.top === this.stack.length -1) {
            throw new Error('Stack is full')
        }

        this.stack[++this.top] = data;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        const data = this.stack[this.top];
        this.stack[this.top--] = null
        return data;

    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.stack[this.top];
    }
}

class TypedArrayStack {
    constructor(size) {
        this.stack = new Int32Array(size);
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.stack[this.top];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        const data = this.stack[this.top];
        this.stack[this.top--] = null;
        return data;
    }

    push(data) {
        if (typeof data !== "number" || data < -2147483648 || data > 2147483647) {
            throw new Error('Must be an integer equal or between -2147483648 and 2147483647')
        }
        if (this.top === this.stack.length -1) {
            throw new Error('Stack is full')
        }

        this.stack[++this.top] = data;
    } 
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedListStack {
    constructor() {
        this.top = null
    }

    isEmpty() {
        return this.top === null;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        const data = this.top.data;
        this.top = this.top.next;
        return data;
    }

    push(item) {
        const node = new Node(item);
        node.next = this.top;
        this.top = node;
    }
}

module.exports = {
    LinkedList: LinkedListStack,
    Array: StandardArrayStack 
}