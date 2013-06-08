/*
Name         : login.js
Author       : Aashaya Bhattarai
Created      : 06/07/2013
*/

$(function () {
    $('.frmlogin').click(function () {
        if ($("#Username").val() == 'test' && $("#Password").val() == 'abc123') {
            $.mobile.changePage("checkin.html", { transition: "none" });
        }
    });
});
