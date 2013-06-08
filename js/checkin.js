/*
Name         : checkin.js
Author       : Aashaya Bhattarai
Created      : 06/07/2013
*/

$(function () {
    $("#btnCheckin").click(function () {
        var lat = $("#lat").val();
        var lng = $("#lng").val();
        alert("lat: " + lat + " lng: " + lng);
    });
});
