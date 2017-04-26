
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  /* var latlng = new google.maps.LatLng(52.3731, 4.8922);*/
  var geocoder = new google.maps.Geocoder();
	var address = $('#map-input').text();

  var mapOptions = {
    center: geocoder,
    scrollWheel: false,
    zoom: 15
  };

  var marker = new google.maps.Marker({
    position: geocoder,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};
/* end google maps -----------------------------------------------------*/
});