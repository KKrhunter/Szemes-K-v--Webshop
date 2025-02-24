let ossz = 0;
let k1_db = 0;
let k2_db = 0;
let k3_db = 0;
let k4_db = 0;
let k5_db = 0;
let k6_db = 0;
let kave1 = 6399;
let kave2 = 6000;
let kave3 = 6299;
let kave4 = 6599;
let kave5 = 5999;
let kave6 = 6899;
let db = 0;

document.getElementById("kave1").style.display = "none"
document.getElementById("kave2").style.display = "none"
document.getElementById("kave3").style.display = "none"
document.getElementById("kave4").style.display = "none"
document.getElementById("kave5").style.display = "none"
document.getElementById("kave6").style.display = "none"

var intervalId = setInterval(osszar, 250);
var intervalId = setInterval(ujar, 250);
function ujar() {
    k1_db = parseInt(document.getElementById("kave1_db").value) ;
    k2_db = parseInt(document.getElementById("kave2_db").value) ;
    k3_db = parseInt(document.getElementById("kave3_db").value) ;
    k4_db = parseInt(document.getElementById("kave4_db").value) ;
    k5_db = parseInt(document.getElementById("kave5_db").value) ;
    k6_db = parseInt(document.getElementById("kave6_db").value) ;
}


function Kosarszam() {
    db += 1
    document.getElementById("kosarszam").innerHTML = db;
}


function k1() {
    k1_db += 1;
    Kosarszam();
    if (k1_db > 0) {
        document.getElementById("kave1").style.display = "block"
    }
    else {
        document.getElementById("kave1").style.display = "none"
    }
    document.getElementById("kave1_db").value = k1_db
    osszar();
    resz_ar();
}



function k2() {
    k2_db += 1;
    Kosarszam();
    if (k2_db > 0) {
        document.getElementById("kave2").style.display = "block"
    }
    else {
        document.getElementById("kave2").style.display = "none"
    }
    document.getElementById("kave2_db").value = k2_db
    osszar();
    resz_ar();
    ujar();
}



function k3() {
    k3_db += 1;
    Kosarszam();
    if (k3_db > 0) {
        document.getElementById("kave3").style.display = "block"
    }
    else {
        document.getElementById("kave3").style.display = "none"
    }
    document.getElementById("kave3_db").value = k3_db
    osszar();
    resz_ar();
    ujar();
}



function k4() {
    k4_db += 1;
    Kosarszam();
    if (k4_db > 0) {
        document.getElementById("kave4").style.display = "block"
    }
    else {
        document.getElementById("kave4").style.display = "none"
    }
    document.getElementById("kave4_db").value = k4_db
    osszar();
    resz_ar();
    ujar();
}



function k5() {
    k5_db += 1;
    Kosarszam();
    if (k5_db > 0) {
        document.getElementById("kave5").style.display = "block"
    }
    else {
        document.getElementById("kave5").style.display = "none"
    }
    document.getElementById("kave5_db").value = k5_db
    osszar();
    resz_ar();
    ujar();
}



function k6() {
    k6_db += 1;
    Kosarszam();
    if (k6_db > 0) {
        document.getElementById("kave6").style.display = "block"
    }
    else {
        document.getElementById("kave6").style.display = "none"
    }
    document.getElementById("kave6_db").value = k6_db
    osszar();
    resz_ar();
    ujar();
}

function resz_ar() {
    document.getElementById("resz_ar1").value = 6399 * k1_db;
    document.getElementById("resz_ar2").value = 6000 * k2_db;
    document.getElementById("resz_ar3").value = 6299 * k3_db;
    document.getElementById("resz_ar4").value = 6599 * k4_db;
    document.getElementById("resz_ar5").value = 5999 * k5_db;
    document.getElementById("resz_ar6").value = 6899 * k6_db;
}



function osszar() {
    ossz = 6399 * k1_db + 6000 * k2_db + 6299 * k3_db + 6599 * k4_db + 5999 * k5_db + 6899 * k6_db;
    document.getElementById("ossz").value = ossz;
    resz_ar();
}

function fizetes() {
    if(document.getElementById("nev").value != "" && document.getElementById("email").value != "" && document.getElementById("ossz").value != 0) {
        alert("")
    }
    else {
        alert("Tovább a fizetési módhoz")
    }
}

// Modális lekérése
var modal = document.getElementById("myModal");

// Gomb lekérése, amely megnyitja a modált
var btn = document.getElementById("myBtn");

// <span> elem lekérése, amely bezárja a modált
var span = document.getElementsByClassName("close")[0];

// Amikor a felhasználó a gombra kattint, nyissa meg a modált
btn.onclick = function () {
    modal.style.display = "block";
}

// Amikor a felhasználó a <span> (x) elemre kattint, zárja be a modált
span.onclick = function () {
    modal.style.display = "none";
}

// Amikor a felhasználó a modális ablakon kívülre kattint, zárja be
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
