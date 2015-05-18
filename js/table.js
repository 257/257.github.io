var career_hdr = Year:Employer:Position/Notes
1995-1996:Kesahvarz F.C.:Midfielder
1996-1997:Bazyaft F.C.:Midfielder
1998-2003:Belal Electric Motor MFG Co.:IT Consultant
1998-2003:Self-employed:Tehran's Grand Bazaar
2008-2010:School of Cinema Concordia Uni.:Post-Prod. Assistant, sysadmin
2010-2011:Centre for Digital Arts Concordia Uni.:*nix consultant, sysadmin
2014-Current:Pharex Canada:network admin

function gen_resume() {
  var career_tbl = document.createElement("table");
  career_tbl.setAttribute("id", "career-tbl");
  document.body.appendChild(career_tbl);

  var career_tbl_hd = document.createElement("th");
  career_tbl_hd.setAttribute("id", "career-header");
  document.getElementById("career").appendChild(y);

  var career-tbl-r1 = document.createElement("tr");
  y.setAttribute("id", "95-96");
  document.getElementById("career").appendChild(y);

  var z = document.createElement("th");
  var t = document.createTextNode("1995-1996");
  z.appendChild(t);
  document.getElementById("95-96").appendChild(z);
  return [x];
}
function say_hello(){
  return ["hellp world"];
}

function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  // var tblHead = document.createElement("thead");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}
