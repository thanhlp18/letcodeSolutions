// Runtime: 84 ms, faster than 71.39% of JavaScript online submissions for Sum of Square Numbers.
// Memory Usage: 42.1 MB, less than 69.88% of JavaScript online submissions for Sum of Square Numbers.

var judgeSquareSum = function(c) {
    let left = 0, right = Math.floor(Math.sqrt(c))
    while(left<=right) {
        let temp = left*left + right*right
        if(c < temp) {
            right--
        } else if(c > temp) {
            left++
        } else if(c==temp) {
            return true
        }
    }
    
    return false
};