function generate_table() {
  var tbl_man = "\
    EMPLOYMENT HISTORY|\
    Year:Employer:Position/Notes|\
    1995-1996:Kesahvarz F.C.:Midfielder|\
    1996-1997:Bazyaft F.C.:Midfielder|\
    1998-2003:Belal Electric Motor MFG Co.:IT Consultant|\
    1998-2003:Self-employed:Tehran's Grand Bazaar|\
    2008-2010:School of Cinema Concordia Uni.:Post-Prod. Assistant, sysadmin|\
    2010-2011:Centre for Digital Arts Concordia Uni.:*nix consultant, sysadmin|\
    2014-Current:Pharex Canada:network admin|\
    \ |\
    SPOKEN LANGUAGES|\
    Fluent:English, Farsi, Azerbaijani|\
    Elementary:French|\
    PROGRAMMING LANGUAGES, TECHNICAL CERTIFICATES, etc|\
    Programming Languages:C, make, sh, python, Mathematica, R|\
    Open source collaborations:openwrt, gentoo|\
    Certificates:Apple Certified Support Professional 10.5 (ACSP)|\
    Server Administration|\
    Network:DNS, DHCP, QoS, VoIP/sip, VPN, edgeos (vyatta/vyos fork) admin|\
    :Currently am ISP to my own r\[u00E9]sidence (7 units plus Pharex Canada)|\
    Directory services:Open Directory (OSX version of openldap), kerborized triangle|\
    Image deployment:deploy studio|\
    CONTACT INFO.|\
    Email:<darwinskernel at gmail.com>"
  var lines = tbl_man.split('|');
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  // var tblHead = document.createElement("thead");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var r = 0; r < lines.length; r++) {
    // creates a table row
    var row = document.createElement("tr");
    var cells = lines[r].split(':');

    for (var c = 0; c < cells.length; c++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode(cells[c]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  /* body.appendChild(tbl); */
  // sets the border attribute of tbl to 2;
  /* tbl.setAttribute("border", "1"); */
  return $(tbl[0])[0].outerHTML;
}
