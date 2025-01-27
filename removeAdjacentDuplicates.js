const { runTestCases } = require('../Test-Case-Functions')

class Solution {

    removeAdjacentDuplicates(string) {
        const stack = []
        
        for (let i = 0; i < string.length; i++) {
            if (stack.length && stack[stack.length-1] === string[i]) {
                stack.pop()    
            } else {
                stack.push(string[i])
            }
        } 

        return stack.join("")
    }
}

const testCases = [
    { input: "abbaca", expected: "ca"},
    { input: "azxxzy", expected: "ay"},
    { input: "abba", expected: ""},
]

const testFunction = new Solution();

runTestCases(testFunction.removeAdjacentDuplicates, testCases)

// Legend:
// TC = Time Complexity
// SC = Space Complexity
