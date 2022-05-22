/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     var i = 0
//     while(i < nums.length && nums[i] < target) {
//         i++;
//     }
//     return i
    
// };

var searchInsert = function(nums, target) {
    var l=0,r = nums.length
    while(l < r) {
        var mid = parseInt((l+r)/2)
        if(nums[mid] == target) {
            return mid
        } 
        if(nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return l
};