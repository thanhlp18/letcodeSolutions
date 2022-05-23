// Runtime: 4275 ms, faster than 6.67% of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 42.6 MB, less than 5.01% of JavaScript online submissions for Valid Perfect Square.
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
//  var isPerfectSquare = function(num) {
//     var mid = parseInt(num/2)
//     var index = 0
//     if(num == 1) return true
//     while(index <= mid) {
//         if(index*index == num) {
//             return true
//         }
//         index++
//     }
//     console.log(index)
//     return false
// };




// Runtime: 70 ms, faster than 69.74% of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 42.3 MB, less than 12.41% of JavaScript online submissions for Valid Perfect Square.
// /**
//  * @param {number} num
//  * @return {boolean}
//  */
//  var isPerfectSquare = function(num) {
//     var i = 1;
//     for(i; i*i<=num;i++) {
//         if(i*i==num) return true
//     }
//     return false
// };