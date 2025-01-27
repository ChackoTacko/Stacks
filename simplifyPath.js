const { runTestCases } = require('../Test-Case-Functions')

class Solution {
    simplifyPath(path) {
        const splitPath = path.split("/")
        const stack = [];

        for (let i = 0; i < splitPath.length; i++) {
            if (splitPath[i] && splitPath[i] !== '.') {
                if (splitPath[i] === '..') {
                    stack.pop()
                }  else {
                    stack.push(splitPath[i])
                }
            } 
        }

        return '/' + stack.join('/')
    }
}

const testCases = [
    { input: "/a//b////c/d//././/..", expected: "/a/b/c"},
    { input: "/../", expected: "/"},
    { input: "/home//foo/", expected: "/home/foo"},
]

const testFunction = new Solution();

runTestCases(testFunction.simplifyPath, testCases)