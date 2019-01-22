var expression='';
var outputExpression='';
var notNumber=false;
var decimalZero=false;
var decimalPoint=true;
var decimalNum=false;
var numlength=1;
var ans='';


function operations(math) {
  if(math == '+' && notNumber==true) {
    expression+="+";
    outputExpression+="+";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }

  if(math == '+' && notNumber==false){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputStringMinusOne;
    expression+="+";
    outputExpression+="+";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }


  if(math=='x' && notNumber==true){
    expression+='*';
    outputExpression+="x";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
	numlength=1;
  }
  if(math == 'x' && notNumber==false){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputStringMinusOne;
    expression+="*";
    outputExpression+="x";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }
  if(math == '/' && notNumber==true) {
    expression+="/";
    outputExpression+="/";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }
  if(math == '/' && notNumber==false){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputStringMinusOne;
    expression+="/";
    outputExpression+="/";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }
  if(math=='-' && notNumber==true){
    expression+='-';
    outputExpression+="-";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }
  if(math == '-' && notNumber==false){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputStringMinusOne;
    expression+="-";
    outputExpression+="-";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }
  if(math == '%' && notNumber==true){
    expression+='*.01'
    outputExpression+="%";
    document.getElementById('calc-output').innerHTML=outputExpression;
  }
  if(math == '%' && notNumber==false){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputStringMinusOne;
    expression+="%";
    outputExpression+="%";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    numlength=1;
  }
  if (math=='.' && notNumber==true && decimalNum==false){
    expression+='.'+'0';
    outputExpression+='.'+'0';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    decimalZero=true;
    decimalPoint=true;
    decimalNum=true;

  }
  if(math == 'delete'){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputStringMinusOne;
  }

}
function numbers(math){
  if(decimalZero==true){
    let r=expression.split('')
    let q=outputExpression.split('')
    r.pop();
    q.pop();
    expression=r.join('');
    outputExpression=q.join('')
    decimalZero=false;
  }
  if (math=="negation"){
	  let z=outputExpression.split('')
	  expression+="*-1";
	  let x=true;
	  for(let i=outputExpression.length-1;i>=0;i--){
		  if((outputExpression[i]=='x'||outputExpression[i]=='/'||outputExpression[i]=='+'||outputExpression=='-') && x==true){
			  x=false;
			  var tempArray=[];
			  for(let j=0; j<=i; j++){
				  let temp=z.shift();
				  tempArray[j]=temp;
			  }
			  z.unshift('-');
			  console.log(z);
			  let arrayLength=tempArray.length;
			  for(let k=0;k<arrayLength;k++){
				let temp2=tempArray.pop();
				z.unshift(temp2);
				console.log(z);
			  }
		  }
		}
	  outputExpression=z.join('');
 	  document.getElementById('calc-output').innerHTML=outputExpression;
  }
  if (math=='0' && numlength<=9){
    expression+='0';
    outputExpression+='0';
    document.getElementById('calc-output').innerHTML=outputExpression.toLocaleString('en');
    notNumber=true;
    numlength++;
  }
  if (math=='pi'&& numlength<=9){
    expression+='3.14';
    outputExpression+='π';
    document.getElementById('calc-output').innerHTML=outputExpression.toLocaleString('en');
    notNumber=true;
    numlength++;
  }
  if (math=='square'){
    expression+='**2';
    outputExpression+='^2';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='cube'){
    expression+='**3';
    outputExpression+='^3';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='power'){
    expression+='**';
    outputExpression+='^';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='1'&& numlength<=9){
    expression+='1';
    outputExpression+='1';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='2'&& numlength<=9){
    expression+='2';
    outputExpression+='2';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='3'&& numlength<=9){
    expression+='3';
    outputExpression+='3';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='4'&& numlength<=9){
    expression+='4';
    outputExpression+='4';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='5'&& numlength<=9){
    expression+='5';
    outputExpression+='5';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='6'&& numlength<=9){
    expression+='6';
    outputExpression+='6';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='7'&& numlength<=9){
    expression+='7';
    outputExpression+='7';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='8'&& numlength<=9){
    expression+='8';
    outputExpression+='8';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='9'&& numlength<=9){
    expression+='9';
    outputExpression+='9';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    numlength++;
  }
  if (math=='ans' && ans != ''){
  expression+='ans';
  outputExpression+='ans';
  document.getElementById('calc-output').innerHTML=outputExpression;
  notNumber=true;
  decimalNum=false;
  }
  document.getElementById("calc-output").innerHTML=outputExpression;
}




function AC(){
  expression='';
  outputExpression='';
  notNumber=false;
  document.getElementById('calc-output').innerHTML=outputExpression;
	decimalZero=false;
	decimalPoint=true;
	decimalNum=false;
	numlength=1;
  document.getElementById('calc-output').innerHTML=0;
}

function equals(math){
  let finalExpression=eval(expression);
  if (math== '='){
    if (finalExpression==Infinity){
      document.getElementById('calc-output').innerHTML="idk bro. Give me some addition or something.";
    }
    else if(finalExpression>=1000000000){
      let exponent=finalExpression.toString().length-1;
      document.getElementById('calc-output').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;

    }
    else{
      document.getElementById('calc-output').innerHTML=finalExpression;
    }

  }
    try {
      finalExpression
    }
    catch(err) {
      document.getElementById('calc-output').innerHTML="What did you even do to get this message.";
    }
    ans=finalExpression;
    expression='';
    outputExpression='';
    finalExpression='';
}
