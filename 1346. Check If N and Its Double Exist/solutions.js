var checkIfExist = function(arr) {
    for(let index1 in arr) {
        for(let index2 in arr) {
            if(index1 != index2) {
                if(arr[index1] == arr[index2] * 2) {
                    console.log(arr[index1], arr[index2])
                    return true
                }
            }
        }
    }
    return false
};