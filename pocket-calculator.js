//function calculator(){
//let value1;
//let value2;
//let value3;
//let value4;
//let value5;
//let value6;
//let value7;
//let value8;
//let value9;

//console.log("test")
//  document.getElementById("calc-output").innerHTML=`<span style='color: white;'>${values.join("")}</span>`;
//}

var values= []
var decimal= false;
var x=9;

/////NUMBERS/////
function button1() {
  if (values.length<x){
    values.push(1);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button2() {
  if (values.length<x){
    values.push(2);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button3() {
  if (values.length<x){
    values.push(3);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button4() {
  if (values.length<x){
    values.push(4);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button5() {
  if (values.length<x){
    values.push(5);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button6() {
  if (values.length<x){
    values.push(6);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button7() {
  if (values.length<x){
    values.push(7);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button8() {
  if (values.length<x){
    values.push(8);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button9() {
  if (values.length<x){
    values.push(9);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

function button0() {
  if (values.length<x){
    values.push(0);
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

///////////////

////FUNCTIONS//////
function buttonAC() {
  values.length=0;
  ;
  document.getElementById("calc-output").innerHTML=`<span>0</span>`;
}

function buttonPoint() {
  if (values.length<10 && decimal==false){
    values.push(".");
    decimal=true;
  }
  document.getElementById("calc-output").innerHTML=`<span>${values.join("")}</span>`;
}

//function button2() {
//  document.getElementById("calc-output").innerHTML="<span style='color: white;'>2</span>";
//}
