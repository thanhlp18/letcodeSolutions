// Runtime: 250 ms, faster than 5.02% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 49.3 MB, less than 5.14% of JavaScript online submissions for Intersection of Two Arrays II.
var intersect = function(nums1, nums2) {
    var result = []
    for(var index1 in nums1) {
        for(var index2 in nums2) {
            if(nums1[index1] == nums2[index2]) {
                result.push(nums1[index1])
                nums2.splice(index2,1)
                break
            }
        }
    }
    console.log(result)
    return result
};