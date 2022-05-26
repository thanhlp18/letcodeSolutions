// Runtime: 100 ms, faster than 28.55% of JavaScript online submissions for Kth Missing Positive Number.
// Memory Usage: 42.4 MB, less than 45.91% of JavaScript online submissions for Kth Missing Positive Number.

var findKthPositive = function (arr, k) {
    const missing = [];
    const len = arr.length + k;
    
    for (let i = 0, j = 1; j <= len; j++) {
      arr[i] != j ? missing.push(j) : i++;
      if (missing.length == k) return missing.pop()
    }
  };