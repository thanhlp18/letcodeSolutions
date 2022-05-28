// Runtime: 98 ms, faster than 29.58% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 44.4 MB, less than 28.93% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
var countNegatives = function(grid) {
    let count = 0
    for(let index1 in grid) {
        for(let index2 in grid[index1]) {
            if(grid[index1][index2] < 0) {
                count++
            }
        }
    }
    return count
};