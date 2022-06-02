// Runtime: 149 ms, faster than 5.63% of JavaScript online submissions for Transpose Matrix.
// Memory Usage: 48 MB, less than 7.50% of JavaScript online submissions for Transpose Matrix.
var transpose = function(matrix) {
    let result = []
    for(var index1 in matrix[0]) {
        let subArr = []
        for(var index2 in matrix) {
                subArr.push(matrix[index2][index1])
        }
        result.push(subArr)
    }
    console.log(result)
    return result
};