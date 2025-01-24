const { runTestCases } = require('../Test-Case-Functions')

// Only integers will be passed as the argument
// Numbers will be positive
// Binary string could be variable in size so we should use a LinkedList to create the stack to avoid potential sizing issues

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
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
        const node = new Node(item)
        node.next  = this.top;
        this.top = node;
    }
}

class Solution {
    // Time Complexity - O(log2(num))
    // Space Complexity - O(log2(num))
    decimalToBinary(num) {
        let binaryString = '';
        let quotient = num;
        const stack = new Stack()

        while (quotient > 0) {
            stack.push(quotient % 2);
            quotient = Math.floor(quotient / 2);
        } 

        while (!stack.isEmpty()) {
            binaryString += stack.pop()
        }

        return binaryString;
    }
}

const testCases = [
    { input: 2, expected: '10'},
    { input: 7, expected: '111'},
    { input: 18, expected: '10010'},
]

const testFunction = new Solution();

runTestCases(testFunction.decimalToBinary, testCases)