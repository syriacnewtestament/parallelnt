$(document).ready(function() {
    current_year_insert();
   });

function current_year_insert() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("current_year").innerHTML = n;
  }