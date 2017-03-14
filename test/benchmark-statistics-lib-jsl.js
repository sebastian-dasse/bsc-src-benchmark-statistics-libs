var statJ = Statistics; // JavaScript: js-port-of-statistics-lib
var statS = platform.StatLib(); // Scala.js: crosscompiling-statistics-lib

var randomArrayOf = function(n) {
  var arr = []
  for (var i = 0; i < n; i++) {
    arr.push(Math.random() * 1e24 - 1e24 / 2)
  };
  return arr;
};

testData = randomArrayOf(1000);

JSLitmus.test("mean-js", function(count) {
  while (count--) {
    statJ.mean(testData);
  }
});

JSLitmus.test("mean-sjs", function(count) {
  while (count--) {
    statS.mean(testData);
  }
});

JSLitmus.test("median-js", function(count) {
  while (count--) {
    statJ.median(testData);
  }
});

JSLitmus.test("median-sjs", function(count) {
  while (count--) {
    statJ.median(testData);
  }
});

JSLitmus.test("variance-js", function(count) {
  while (count--) {
    statJ.variance(testData);
  }
});

JSLitmus.test("variance-sjs", function(count) {
  while (count--) {
    statS.variance(testData);
  }
});

JSLitmus.test("deviation-js", function(count) {
  while (count--) {
    statJ.deviation(testData);
  }
});

JSLitmus.test("deviation-sjs", function(count) {
  while (count--) {
    statS.deviation(testData);
  }
});