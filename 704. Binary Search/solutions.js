/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    for(var index in nums) {
        if(target == nums[index]) {
            return index;
        }
    }
    return -1;
};