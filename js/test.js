function say_hello() {
 document.write("hello world");
}

function generate_table(t) {
  var lines   = t.split('|');
  // get the reference for the body
  var body    = document.getElementsByTagName("body")[0];
  
  // printout the header first
  // body.appendChild(lines[0]);
  // body.append(lines[0]);

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");

  var tblHead = document.createElement("thead");
  var hcell = document.createElement("th");
  hcell.style.cssFloat = "left";
  tblHead.appendChild(hcell);
  var hcellText = document.createTextNode(lines[0]);
  hcell.appendChild(hcellText);
  tbl.appendChild(tblHead);

  var tblBody = document.createElement("tbody");

  tbl.appendChild(tblHead);
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);

  // creating all cells
  for (var r = 1; r < lines.length; r++)
    append_row(lines[r],tbl);

}

function append_row(l,t) {
    var row = document.createElement("tr");
    var cells = l.split(':');

    for (var c = 0; c < cells.length; c++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(cells[c]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    t.tbody.appendChild(row);
    t.appendChild(t.body);
    body.appendChild(t);
}
