/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    var left = 0, right = arr.length - 1
    while(left < right) {
        if(arr[left] > arr[right]) {
            right--
        } 
        if(arr[left] < arr[right]) {
            left++
        }
        if(arr[left] == arr[right] && left!=right) {
            left++
            right--
        }
    }
    return right
};