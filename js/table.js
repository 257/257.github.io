function gen_resume() {
  var x = document.createElement("TABLE");
  x.setAttribute("id", "career");
  document.body.appendChild(x);

  var y = document.createElement("TR");
  y.setAttribute("id", "95-96");
  document.getElementById("career").appendChild(y);

  var z = document.createElement("TD");
  var t = document.createTextNode("1995-1996");
  z.appendChild(t);
  document.getElementById("95-96").appendChild(z);
}
