var bulb = document.getElementById("off");
var btnoff = document.getElementById("btnoff");
var btnon = document.getElementById("btnon")

function bulbOn(){
    bulb.src = "images/on-removebg-preview.png";
    btnoff.disabled = false;
    btnon.disabled = true
};

var btnon = document.getElementById("btnon")

function bulbOff(){
    bulb.src = "images/off-removebg-preview.png";
    btnon.disabled = false;
    btnoff.disabled = true
};