var searchMatrix = function(matrix, target) {
    for(var index1 in matrix) {
        for(var index2 in matrix[index1]) {
            if(matrix[index1][index2]==target) {
                return true
            }
        }
    }
    return false
};