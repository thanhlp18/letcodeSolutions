// Runtime: 162 ms, faster than 11.19% of JavaScript online submissions for Arranging Coins.
// Memory Usage: 43.6 MB, less than 95.77% of JavaScript online submissions for Arranging Coins.

var arrangeCoins = function(n) {
    let l = 1, r = n
    while(l<=r) {
        mid = l + Math.floor((r - l)/2)
        if((mid+1)*(mid/2) <= n) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l - 1
};


// Runtime: 118 ms, faster than 42.97% of JavaScript online submissions for Arranging Coins.
// Memory Usage: 44.4 MB, less than 42.16% of JavaScript online submissions for Arranging Coins.
var arrangeCoins = function(n) {
    let stair = 0
    while(stair <= n) {
        n -= stair
        stair++
    }
    return stair - 1
};