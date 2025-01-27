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
    removeStars(s) {
        const stack = new Stack(s.length);

        for (let i = 0; i < s.length; i++) {
            if (!stack.isEmpty() && s[i] === "*") {
                stack.pop();
            } else {
                if (s[i] !== "*") {
                    stack.push(s[i]);
                }
            }
        } 

        return stack.list.join("")
    }
}

const testCases = [
    { input: "abc*de*f", expected: "abdf"},
    { input: "a*b*c*d", expected: "d"},
    { input: "abcd", expected: "abcd"},
]

const testFunction = new Solution();

runTestCases(testFunction.removeStars, testCases)