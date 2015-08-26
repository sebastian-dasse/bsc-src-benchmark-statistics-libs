var logger = (typeof(SimpleLogger) != "undefined") && new SimpleLogger("Dummy Benchmark");
var log = logger ? logger.log : console.log;

var suite = new Benchmark.Suite;

suite
  .add("Dummy#test", function() {
    "Hello world!".indexOf("o") > -1;
  })
  .add("Dummy1#sum1", function() {
    sum1(100000);
  })
  .add("Dummy2#sum2", function() {
    sum2(100000);
  })
  .on("cycle", function(event) {
    log(String(event.target));
  })
  .on("complete", function() {
    log("\u2192 Fastest is " + this.filter("fastest").pluck("name"));
  })
  .run();