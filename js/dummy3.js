var sumArray1 = function(arr) {
  var sum = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return sum;
};

var sumArray2 = function(arr) {
  return arr.reduce(function(acc, elm) {
    return acc + elm;
  });
};

var mapArray1 = function(arr, fn) {
  for (var i = 0, len = arr.length; i < len; i++) {
    arr[i] = fn(arr[i]);
  }
};

var mapArray2 = function(arr, fn) {
  return arr.map(fn);
};