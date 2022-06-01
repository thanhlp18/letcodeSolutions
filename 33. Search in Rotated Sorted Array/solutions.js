const findRotateIndex = function(nums) {
    let start = 1, end = nums.length - 2
    if(end <= 0) {
        return 0
    } else 
    while(start <= end) {

    if(nums[start - 1] <= nums[start] && nums[start + 1] <= nums[start]) {
        return start
    }
        start++
    }
}

const findTargetIndex = function(start, end, nums, target) {
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2)
        if(nums[mid] == target) {
            return mid
        } 
        if(nums[start] == target) {
            return start
        }
        if(nums[end] == target) {
            return end
        }
        if(target < nums[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

var search = function(nums, target) {
    let rotateIndex = findRotateIndex(nums)
    console.log(rotateIndex)
    let startIndex = 0, endIndex = nums.length - 1
    let result = Math.max(findTargetIndex(startIndex, rotateIndex, nums, target),findTargetIndex(rotateIndex, endIndex, nums, target),findTargetIndex(startIndex, endIndex, nums,target))
    return result
};