let problems = [
    {
        problemId: 1,
        problemTitle: "Two Sum",
        problemDescription: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        examples: [
            {
                exampleId: 1,
                exampleInput: "nums = [2,7,11,15], target = 9",
                exampleOutput: "[0,1]",
                exampleExplanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            },
            {
                exampleId: 2,
                exampleInput: "nums = [3,2,4], target = 6",
                exampleOutput: "[1,2]",
                exampleExplanation: null
            }
        ],
        tests: [
            {
                testId: 1,
                test: [[2, 7, 11, 15], 9],
                result: [0, 1]
            },
            {
                testId: 2,
                test: [[3, 2, 4], 6],
                result: [1, 2]
            },
            {
                testId: 3,
                test: [[3, 3], 6],
                result: [0, 1]
            },
            {
                testId: 4,
                test: [[3, 3, 4], 6],
                result: [0, 1]
            },
            {
                testId: 5,
                test: [[3, 3, 4, 4], 6],
                result: [0, 1]
            }
        ],
        functionArguments: ["nums", "target"],
        functionName: "twoSum",
        functionContent: `
var twoSum = function(nums, target) {

};
        `
    },


    {
        problemId: 2,
        problemTitle: "Palindrome Number",
        problemDescription: "Given an integer x, return true if x is palindrome integer.",
        examples: [
            {
                exampleId: 1,
                exampleInput: "x = 121",
                exampleOutput: "true",
                exampleExplanation: "121 reads as 121 from left to right and from right to left."
            },
            {
                exampleId: 2,
                exampleInput: "x = -121",
                exampleOutput: "false",
                exampleExplanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
            },
            {
                exampleId: 3,
                exampleInput: "x = 10",
                exampleOutput: "false",
                exampleExplanation: "Reads 01 from right to left. Therefore it is not a palindrome."
            }
        ],
        tests: [
            {
                testId: 1,
                test: [121],
                result: true
            },
            {
                testId: 2,
                test: [-121],
                result: false
            },
            {
                testId: 3,
                test: [10],
                result: false
            }
        ],
        functionArguments: ["x"],
        functionName: "isPalindrome",
        functionContent: `
let isPalindrome = function(x) {

};
        `
    },



    {
        problemId: 3,
        problemTitle: "Longest Common Prefix",
        problemDescription: `
        Write a function to find the longest common prefix string amongst an array of strings.

        If there is no common prefix, return an empty string "".
        `,
        examples: [
            {
                exampleId: 1,
                exampleInput: `strs = ["flower","flow","flight"]`,
                exampleOutput: `"fl"`,
                exampleExplanation: null
            },
            {
                exampleId: 2,
                exampleInput: `strs = ["dog","racecar","car"]`,
                exampleOutput: "",
                exampleExplanation: "There is no common prefix among the input strings."
            },
        ],
        tests: [
            {
                testId: 1,
                test: [
                    ["flower","flow","flight"]
                ],
                result: "fl"
            },
            {
                testId: 2,
                test: [
                    ["dog","racecar","car"]
                ],
                result: ""
            },
        ],
        functionArguments: ["strs"],
        functionName: "longestCommonPrefix",
        functionContent: `
let longestCommonPrefix = function(strs) {

};
        `
    },

    



]

