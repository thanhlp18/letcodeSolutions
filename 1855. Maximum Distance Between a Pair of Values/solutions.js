// Runtime: 172 ms, faster than 34.10% of JavaScript online submissions for Maximum Distance Between a Pair of Values.
// Memory Usage: 54.9 MB, less than 9.83% of JavaScript online submissions for Maximum Distance Between a Pair of Values.
const findMaxDistance = function(inputIndex, inputValue, inputArray) {
    let start = inputIndex, end = inputArray.length - 1
    let currmaxDistance = 0
    while(start <= end) {
        let mid = start + Math.floor((end - start)/2)
        if(inputIndex <= mid && inputValue <= inputArray[mid]) {
            currmaxDistance = mid - inputIndex
        }
        if(inputValue > inputArray[mid]) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return currmaxDistance
}


var maxDistance = function(nums1, nums2) {
    let maxDistance = 0
    let maxIndex = Math.min(nums1.length, nums2.length )
    for(let index = 0; index < maxIndex; index++) {
        maxDistance = Math.max(maxDistance, findMaxDistance(index, nums1[index], nums2))
    }
    return maxDistance
};