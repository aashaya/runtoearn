/*
Name         : checkin.js
Author       : Aashaya Bhattarai
Created      : 06/07/2013
*/

$(function () {
   $('.checkin').click(function () {
      if(navigator.geolocation) {
   			navigator.geolocation.getCurrentPosition(function(position){
					initialize(position.coords.latitude,position.coords.longitude);
				});
			}
});

function initialize(lat,lng) {
   		var latlng = new google.maps.LatLng(lat, lng);
			var myOptions = {
				zoom: 8,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		    var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
		}
