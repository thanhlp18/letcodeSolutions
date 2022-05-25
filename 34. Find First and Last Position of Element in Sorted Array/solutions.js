// Runtime: 249 ms, faster than 5.21% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 50.7 MB, less than 5.41% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
var searchRange = function(nums, target) {
    var start = -1, end = -1
    var left = 0, right = nums.length - 1
    while(left <= right) {
        if(nums[left] == target && start == -1) start = left
        if(nums[right] == target && end == -1) {
            end = right
        }
        if(start != -1 && end != -1) break
        console.log(start, end)
        if(end == -1) right--
        if(start == -1) left++
        if(end != -1 && start != -1) break
    }
    return [start, end]
};

// Runtime: 528 ms, faster than 5.21% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 52.3 MB, less than 5.41% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
var searchRange = function(nums, target) {
    const find = (Target, Nums, left = 0, right = Nums.length) => {
        console.log("target", target)
        while(left <= right) {
            console.log(left, right)
         let mid = left + Math.floor(right - left)
            if(Nums[mid] < target) left = mid + 1
            else {
                right = mid - 1
            }
        }
        return left
    }
    var start = find(target, nums)
    if(nums[start] !== target) return [-1,-1]
    return [start, find(target++, nums, start) - 1]
 };
 
 