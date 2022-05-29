// Runtime: 73 ms, faster than 77.35% of JavaScript online submissions for The K Weakest Rows in a Matrix.
// Memory Usage: 45.9 MB, less than 7.29% of JavaScript online submissions for The K Weakest Rows in a Matrix.
var kWeakestRows = function(mat, k) {
    let sortFunction = function(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
    let result = []
    let arr = []
    for(var index1 in mat) {
        var count = 0
        for(var index2 in mat[index1]) {
            if(mat[index1][index2] ==0) {
                break
            } else {
                count++
                // console.log(index2)
            }
        }
        result.push([count, index1])
    }
    result.sort(sortFunction)
    console.log(result)
    result.slice(0,k).forEach((ele) => {
        arr.push(ele[1])
    })
    
    console.log(arr) 
    return arr
};