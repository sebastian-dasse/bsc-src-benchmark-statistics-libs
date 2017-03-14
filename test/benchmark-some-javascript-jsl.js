var sumUpSimple = function(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += i
  }
  return sum;
};

var sumUpGauss = function(n) {
  return (n * n + n) / 2;
};

var sumArrayIter = function(arr) {
  var sum = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return sum;
};

var sumArrayFunc = function(arr) {
  return arr.reduce(function(acc, elm) {
    return acc + elm;
  });
};

var mapArrayIter = function(arr, fn) {
  for (var i = 0, len = arr.length; i < len; i++) {
    arr[i] = fn(arr[i]);
  }
};

var mapArrayFunc = function(arr, fn) {
  return arr.map(fn);
};

// ------------------------------------

JSLitmus.test("sumUpSimple", function(count) {
  while (count--) {
    sumUpSimple(100000);
  }
});

JSLitmus.test("sumUpGauss", function(count) {
  while (count--) {
    sumUpGauss(100000);
  }
});

JSLitmus.test("sumArrayIter", function(count) {
  while (count--) {
    sumArrayIter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
});

JSLitmus.test("sumArrayFunc", function(count) {
  while (count--) {
    sumArrayFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
});

JSLitmus.test("mapArrayIter", function(count) {
  while (count--) {
    mapArrayIter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Math.sqrt);
  }
});

JSLitmus.test("mapArrayFunc", function(count) {
  while (count--) {
    mapArrayFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Math.sqrt);
  }
});