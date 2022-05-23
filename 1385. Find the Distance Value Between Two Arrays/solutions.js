// Runtime: 166 ms, faster than 5.07% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
// Memory Usage: 48.5 MB, less than 5.07% of JavaScript online submissions for Find the Distance Value Between Two Arrays.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
 var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0
    for(var index1 in arr1) {
        let tobeContinute = true
        for(var index2 in arr2) {
            if(d >= Math.abs(arr1[index1] - arr2[index2])) {
                tobeContinute = false
                break;
            }
        }
        if(tobeContinute) count++
    }
    console.log(count)
    return count
};



// Runtime: 247 ms, faster than 5.07% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
// Memory Usage: 49.1 MB, less than 5.07% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
 var findTheDistanceValue = function(arr1, arr2, d) {
    var left1 = 0, right1 = arr1.length - 1
    var count = 0
    while(left1 <= right1) {
        let isContinuteLeft = true
        let isContinuteRight = true
        for(var index in arr2) {
            if(left1==right1) {
            isContinuteLeft = false
            break
            }
            if(Math.abs(arr1[left1] - arr2[index]) <= d) isContinuteLeft = false
        }
        for(var index in arr2) {
            if(Math.abs(arr1[right1] - arr2[index]) <= d) isContinuteRight = false
        }
        if(isContinuteLeft) count++
        if(isContinuteRight) count++
        left1++
        right1--

    }
    console.log(count)
    return count
};