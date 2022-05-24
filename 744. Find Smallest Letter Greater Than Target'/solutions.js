// Runtime: 333 ms, faster than 5.77% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
// Memory Usage: 50.4 MB, less than 5.04% of JavaScript online submissions for Find Smallest Letter Greater Than Target.

var nextGreatestLetter = function(letters, target) {
    for(var index in letters) {
        console.log(letters[index] < target)
        if(letters[index] >= target && letters[index]  != target) return letters[index]
    }
    return letters[0]
};