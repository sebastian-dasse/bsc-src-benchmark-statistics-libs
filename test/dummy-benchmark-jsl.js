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