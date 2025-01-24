const { runTestCases } = require('../Test-Case-Functions');
const { Array } = require('./stack');

class Solution {
    reverseString(s) {
        let reverse = ''
        const length = s.length;

        const stack = new Array(length)
        
        for (let i = 0; i < length; i++) {
            stack.push(s[i])
        }

        while (!stack.isEmpty()) {
            reverse += stack.pop()
        }

        return reverse
    }

}


// Space Complexity - O(N) Where N is the length of the string
// Time Complexity - O(N) Where N equal to the number of characters in the string

const testCases = [
    { input:"Hello, World!", expected: "!dlroW ,olleH" },
    { input: "OpenAI", expected: "IAnepO" },
    { input: "Stacks are fun!", expected: "!nuf era skcatS" },
];

const testFunction = new Solution();

runTestCases(testFunction.reverseString, testCases)