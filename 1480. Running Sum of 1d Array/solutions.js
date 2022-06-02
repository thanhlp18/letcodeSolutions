// Runtime: 92 ms, faster than 34.11% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.7 MB, less than 16.51% of JavaScript online submissions for Running Sum of 1d Array.
var runningSum = function(nums) {
    let result = []
    for(var index1 in nums) {
        let = sum = 0
        for(let index2 = 0; index2 <= index1; index2++) {
            sum += nums[index2]
        }
        result.push(sum)
    }
    return result
};