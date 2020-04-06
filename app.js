'use strict';

$(document).ready(function (){
    $.ajax({
        type: "GET",
        url: "az.json",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(data){
    let elout = document.getElementById("output");
    elout.insertAdjacentHTML('beforeend', data);
}