function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 Quote=document.getElementById("quote_1").innerHTML;
var count = 0;
    window.setInterval(function(){
        document.getElementById("quote_1").innerHTML=Quote;
        count++;
    }, 1000);
    var Quote2= document.getElementById("quote_2").innerHTML;
    var count1 = 0;
    window.setInterval(function(){
        document.getElementById("quote_2").innerHTML=Quote2;
        count1++;
    }, 1000);
    

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}