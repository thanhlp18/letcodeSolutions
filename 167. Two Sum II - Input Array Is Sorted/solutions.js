// Runtime: 466 ms, faster than 5.01% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 51.2 MB, less than 5.71% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while(left < right) {
        console.log(numbers[left], numbers[right])
        if(numbers[left] + numbers[right] < target) {
            left++
        } else if(numbers[left] + numbers[right] > target) {
            right--
        } else {
            right++
            left++
            break
        }
    }
    return [left, right]
};