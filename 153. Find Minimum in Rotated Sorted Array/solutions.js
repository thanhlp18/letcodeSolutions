// Runtime: 108 ms, faster than 10.86% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 42.6 MB, less than 10.39% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
const findRotateIndex = function(nums) {
    let start = 1, end = nums.length - 2
    if(end <= 0) {
        return 0
    } else 
    while(start <= end) {

    if(nums[start - 1] >= nums[start] && nums[start + 1] >= nums[start]) {
        return start 
    }
        start++
    }
    return 0
}


var findMin = function(nums) {
    let rotateIndex = findRotateIndex(nums)
    console.log(rotateIndex)
    let min = Math.min(nums[0], nums[rotateIndex],nums[nums.length - 1])
    return min
};

// Runtime: 66 ms, faster than 77.13% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 42.3 MB, less than 24.60% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
var findMin = function(nums) {
    return Math.min.apply(Math, nums)
};