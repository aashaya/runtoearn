/*
Name         : login.js
Author       : Aashaya Bhattarai
Created      : 06/07/2013
*/

$(function () {
    $('.login').click(function () {
        if ($("#Username").val() == '' && $("#Password").val() == '') {
            alert("ab!!!!");
            $.mobile.changePage("checkin.html", { transition: "none" });
        }
    });
});
