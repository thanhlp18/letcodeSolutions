// Runtime: 77 ms, faster than 51.36% of JavaScript online submissions for First Bad Version.
// Memory Usage: 43.9 MB, less than 6.76% of JavaScript online submissions for First Bad Version.
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1, right = n
        while(left < right) {
            mid = Math.floor((left+ (right - left)/2))
            console.log(left, right, mid)
            if(isBadVersion(mid)) {
                right = mid 
            } else {
                left = mid + 1
            }
        }
        return left
    };
};