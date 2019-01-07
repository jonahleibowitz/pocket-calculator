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


/////NUMBERS/////
function button1() {
  if (values.length<9){
    values.push(1);
  }
  document.getElementById("calc-output").innerHTML=`<span style='color: white;'>${values.join("")}</span>`;
}

function button2() {
  if (values.length<9){
    values.push(2);
  }
  document.getElementById("calc-output").innerHTML=`<span style='color: white;'>${values.join("")}</span>`;
}

function button3() {
  if (values.length<9){
    values.push(3);
  }
  document.getElementById("calc-output").innerHTML=`<span style='color: white;'>${values.join("")}</span>`;
}
///////////////

////FUNCTIONS//////
function buttonAC() {
  values.length=0;
  ;
  document.getElementById("calc-output").innerHTML=`<span style='color: white;'>0</span>`;
}

//function button2() {
//  document.getElementById("calc-output").innerHTML="<span style='color: white;'>2</span>";
//}
