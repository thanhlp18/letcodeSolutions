// Runtime: 188 ms, faster than 6.41% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 43.9 MB, less than 37.74% of JavaScript online submissions for Sqrt(x).
 var mySqrt = function(x) {
    var index = 0
    if(x > 1) {
        var mid = parseInt((x)/2)
    } else {
        var mid = 1
    }
    while(index <= mid) {
        if(index*index >= (x - index)) {
            if(index*index <= x) return index
            if(index*index > x) return index - 1 
        }
        index++
    }
    return index - 1
};


// Runtime: 114 ms, faster than 40.90% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 43.5 MB, less than 69.30% of JavaScript online submissions for Sqrt(x).
var mySqrt = function(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
  
    return right;
  };