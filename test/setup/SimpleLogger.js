"use strict";

var SimpleLogger = function(title) {
  title = title || "Benchmark";

  var h1 = document.createElement("h1");
  h1.setAttribute("id", "title");
  h1.innerHTML = title;
  console.log("~~ [" + title + "] ~~");

  var outDiv = document.createElement("div");
  outDiv.setAttribute("class", "table-responsive");
  var table = document.createElement("table");
  table.setAttribute("class", "table table-striped table-condensed");
  var tbody = document.createElement("tbody");
  tbody.setAttribute("id", "output-body");

  document.body.appendChild(h1);
  document.body.appendChild(outDiv);
  outDiv.appendChild(table);
  table.appendChild(tbody);

  var _appendTableRow = function(text) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = text;
    tr.appendChild(td);
    tbody.appendChild(tr);
  };

  return {
    log: function(text) {
      _appendTableRow(text);
      console.log(text);
    }
  };
};