function Truth8(){
var t8 = document.getElementById("c0").value;
var text8;
if (t8 != "T" ) {
    text8 = "T";
  }  else {
    text8 = "F";
  }
  document.getElementById("c1").innerHTML = text8;
  }

function Truth9(){
var t9 = document.getElementById("c2").value;
var text9;
if (t9 != "T" ) {
  text9 = "T";
}  else {
  text9 = "F";
}
document.getElementById("c3").innerHTML = text9;
}

function Truth0(){
var t0 = document.getElementById("a0").value;
var t1 = document.getElementById("a1").value;
var text0;
    if (t0 === "T" && t1 === "T" ) {
        text0 = "T";
    }  else {
        text0 = "F";
    }
    document.getElementById("a2").innerHTML = text0;
}

function Truth1(){
var t2 = document.getElementById("a3").value;
var t3 = document.getElementById("a4").value;
var text1;
    if (t2 === "T" && t3 === "T" ) {
        text1 = "T";
    }  else {
        text1 = "F";
    }
    document.getElementById("a5").innerHTML = text1;
}

function Truth2(){
var t4 = document.getElementById("a6").value;
var t5 = document.getElementById("a7").value;
var text2;
    if (t4 === "T" && t5 === "T" ) {
        text2 = "T";
    }  else {
        text2 = "F";
    }3
    document.getElementById("a8").innerHTML = text2;
}

function Truth3(){
var t6 = document.getElementById("a9").value;
var t7 = document.getElementById("a10").value;
var text3;
    if (t6 === "T" && t7 === "T" ) {
        text3 = "T";
    }  else {
        text3 = "F";
    }
    document.getElementById("a11").innerHTML = text3;
}

function Truth4(){
var t0 = document.getElementById("b0").value;
var t1 = document.getElementById("b1").value;
var text4;
if (t0 === "T" || t1 === "T" ) {
    text4 = "T";
}  else {
    text4 = "F";
}
document.getElementById("b2").innerHTML = text4;
}

function Truth5(){
var t2 = document.getElementById("b3").value;
var t3 = document.getElementById("b4").value;
var text5;
if (t2 === "T" || t3 === "T" ) {
    text5 = "T";
}  else {
    text5 = "F";
}
document.getElementById("b5").innerHTML = text5;
}

function Truth6(){
var t4 = document.getElementById("b6").value;
var t5 = document.getElementById("b7").value;
var text6;
if (t4 === "T" || t5 === "T" ) {
    text6 = "T";
}  else {
    text6 = "F"
}
document.getElementById("b8").innerHTML = text6;
}

function Truth7(){
var t6 = document.getElementById("b9").value;
var t7 = document.getElementById("b10").value;
var text7;
if (t6 === "T" || t7 === "T" ) {
    text7 = "T";
}  else {
    text7 = "F";
}
document.getElementById("b11").innerHTML = text7;
}
