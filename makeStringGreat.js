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
    // TC = O(N) Where N = input string length
    // SC = O(N) Where N = input string length    
    makeStringGreat(s) {
        const stack = new Stack(s.length)

        for (let i = 0; i < s.length; i ++) {
            if (!stack.isEmpty() && (stack.peek() !== s[i]) && (String(stack.peek()).toLowerCase() === s[i].toLowerCase())) {
                stack.pop()
            } else {
                stack.push(s[i])
            }
        }
    
        return stack.list.join("");
    }
}

const testCases = [
    { input: "AaBbCcDdEeff", expected: "ff"},
    { input: "abBA", expected: ""},
    { input: "s", expected: "s"},
]

const testFunction = new Solution();

runTestCases(testFunction.makeStringGreat, testCases)

// Legend:
// TC = Time Complexity
// SC = Space Complexity
