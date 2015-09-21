JSLitmus.test("Dummy#test", function(count) {
  while (count--) {
    "Hello world!".indexOf("o") > -1;
  }
});

JSLitmus.test("Dummy1#sum1", function(count) {
  while (count--) {
    sum1(100000);
  }
});

JSLitmus.test("Dummy2#sum2", function(count) {
  while (count--) {
    sum2(100000);
  }
});

JSLitmus.test("Dummy3#sumArray1", function(count) {
  while (count--) {
    sumArray1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
});

JSLitmus.test("Dummy3#sumArray2", function(count) {
  while (count--) {
    sumArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
});

JSLitmus.test("Dummy3#mapArray1", function(count) {
  while (count--) {
    mapArray1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Math.sqrt);
  }
});

JSLitmus.test("Dummy3#mapArray2", function(count) {
  while (count--) {
    mapArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Math.sqrt);
  }
});