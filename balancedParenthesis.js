const { runTestCases } = require('../Test-Case-Functions')  

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
    } 

    isEmpty() {
        return this.top === null;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.top.data;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
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

class ArrayStack {
    constructor(size) {
        this.stack = new Array(size);
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.stack[this.top]
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
        if (this.top === this.stack.length - 1) {
            throw new Error('Stack is full')
        }

        this.stack[++this.top] = data;
    }
}

class Solution {
    balancedParenthesis(s) {
        const dictionary = {
            "(":")",
            ")":"(",
            "{":"}",
            "}":"{",
            "[":"]",
            "]":"[",
        }

        const length = s.length;
        const stack = new ArrayStack(length);
        
        if (length % 2 !== 0) return false;
        
        for (let i = 0; i < length; i++) {
            if (!stack.isEmpty() && (s[i] === dictionary[stack.peek()])) {
                stack.pop();
            } else {
                stack.push(s[i])
            }
        }

        return stack.isEmpty() ? true : false;
    }

}


// Space Complexity - O(N)
// Time Complexity - O(N)

const testCases = [
    { input: "{[()]}", expected: true },
    { input: "{[}]", expected: false },
    { input: "(]", expected: false },
];

const testFunction = new Solution();

runTestCases(testFunction.balancedParenthesis, testCases)