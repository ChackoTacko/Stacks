const { runTestCases } = require('../Test-Case-Functions')

class Stack {
    constructor(size) {
        this.list = new Array(size)
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.list[this.top]
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        const data = this.list[this.top]
        this.list[this.top--] = null
        return data;
    }
    push(data) {
        if (this.top === this.list.length) {
            throw new Error('Stack is full')
        }

        return this.list[++this.top] = data
    } 
}

class Solution {
    sortingStack(stack) {
        let tempStack = new Stack();

        while (stack.length) {
            const temp = stack.pop();
            while (!tempStack.isEmpty() && tempStack.peek() > temp) {
                stack.push(tempStack.pop())
            }

            tempStack.push(temp);
        }


        return tempStack.list;
    }
}

const testCases = [
    { input: [34, 3, 31, 98, 92, 23], expected: [3, 23, 31, 34, 92, 98]},
    { input: [4, 3, 2, 10, 12, 1, 5, 6], expected: [1, 2, 3, 4, 5, 6, 10, 12]},
    { input: [20, 10, -5, -1], expected: [-5, -1, 10, 20]},
]

const testFunction = new Solution();

runTestCases(testFunction.sortingStack, testCases)