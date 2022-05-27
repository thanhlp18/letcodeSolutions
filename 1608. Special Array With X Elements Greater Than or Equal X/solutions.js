// Runtime: 106 ms, faster than 18.15% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
// Memory Usage: 44.9 MB, less than 5.23% of JavaScript online submissions for Special Array With X Elements Greater Than or Equal X.
var specialArray = function(nums) {
    var result = 1
    for(let index in nums) {
         let count = 0
         for(let subIndex in nums) {
             if(nums[subIndex] >= result) {
                 count++
             }
         }
        if(result == count) return result
        result++
    }
    return -1
    
    
};