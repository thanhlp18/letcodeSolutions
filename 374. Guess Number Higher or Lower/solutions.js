/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    var startIndex = 1
    var endIndex = n
    while(startIndex <= endIndex) {
        var mid = parseInt(startIndex + (endIndex - startIndex)/2,0)
        if(guess(mid) == 1) {
            startIndex = mid + 1
        }
        if(guess(mid) == -1) {
            endIndex = mid - 1
        }
        if(guess(mid) == 0) {
            return mid
        }
    }
    return -1
};