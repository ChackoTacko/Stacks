const { runTestCases } = require('../Test-Case-Functions');
const { Array } = require('./stack');

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
        const stack = new Array(length);
        
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