function initMap() {
  var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: laboratoriaLima
  });
  var marcadorLaboratoria = new google.maps.Marker ({
    position: laboratoriaLima,
    map: map
  });
}

function search() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

var c_latitude, c_longitude;
var success = function (position) {
  c_latitude = position.coords.latitude;
  c_longitude = position.coords.longitude;
  var map = new google.maps.Map(document.getElementById("map"));
  map.setZoom(18);
  map.setCenter({lat: c_latitude, lng: c_longitude});
  var myLocation = new google.maps.Marker ({
  position: {lat: c_latitude, lng: c_longitude},
  map: map
  });
};
var error = function (error) {
  alert("Tenemos un problema con encontrar tu ubicación");
};
document.getElementById("find_me").addEventListener("click", search);
