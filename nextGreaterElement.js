const { runTestCases } = require('../Test-Case-Functions')

class Stack {
    constructor(size) {
        this.list = new Array(size);
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        return this.list[this.top];
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty')
        }

        const data = this.list[this.top];
        this.list[this.top--] = null;
        return data
    }

    push(data) {
        if (this.top === this.list.length -1) {
            throw new Error('Stack is full')
        }

        return this.list[++this.top] = data;
    } 
}

class Solution {
    // Array should iterate from right to left
    // As we iterate we should always push the most recent number into the stack
    // While the value we are observing is less than the first item in the stack, pop that item off the stack
    // If the stack has a value remaining set the corresponding value in our new array equal to the item on the top of the stack, don't remove it though because it could be greater than the next number
    // * We know the length of the new array so we shouuld use an array based stack
    nextGreaterElement(arr) {
        const result = new Array(arr.length).fill(-1);
        const stack = new Stack(arr.length);

        for (let i = arr.length - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(arr[i]);
        }

        return result;
    }
}

// Time Complexity - O(N): result array will create N number of indicies equal to the length f the array and the for run will run N number of times
// Space COmplexity - O(N): Where N is equal to the number of indicies and size of the stack equal to the size of the original array
const testCases = [
    { input: [1, 2, 3, 4, 5], expected: [2,3,4,5,-1]},
    { input: [5, 4, 3, 2, 1], expected: [-1,-1,-1,-1,-1]},
    { input: [1, 3, 5, 2, 4], expected: [3,5,-1,4,-1]},
]

const testFunction = new Solution();

runTestCases(testFunction.nextGreaterElement, testCases)