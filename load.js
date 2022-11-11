function openWin() {
  window.open("/route/loading.html")
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}