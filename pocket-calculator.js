var expression='';
var outputExpression='';
var notNumber=false;
var zeroDec=false;
var decimalPoint=true;
var numberDec=false;
var count=1;
var ans='';


function operations(math) {
  if(math == '+' && notNumber==true) {
    expression+="+";
    outputExpression+="+";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    count=1;
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
    count=1;
  }


  if(math=='x' && notNumber==true){
    expression+='*';
    outputExpression+="x";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
	count=1;
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
    count=1;
  }
  if(math == '/' && notNumber==true) {
    expression+="/";
    outputExpression+="/";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    count=1;
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
    count=1;
  }
  if(math=='-' && notNumber==true){
    expression+='-';
    outputExpression+="-";
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=false;
    count=1;
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
    count=1;
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
    count=1;
  }
  if (math=='.' && notNumber==true && numberDec==false){
    expression+='.'+'0';
    outputExpression+='.'+'0';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    zeroDec=true;
    decimalPoint=true;
    numberDec=true;
  }

  if(math == 'delete'){
    var theStringMinusOne = expression.substring(0, (expression.length-1));
    var outputStringMinusOne = outputExpression.substring(0, expression.length-1);
    expression= theStringMinusOne
    outputExpression= outputStringMinusOne
    document.getElementById('calc-output').innerHTML=outputExpression;
    }
}


function numbers(math){
  if(zeroDec==true){
    let r=expression.split('')
    let q=outputExpression.split('')
    r.pop();
    q.pop();
    expression=r.join('');
    outputExpression=q.join('')
    zeroDec=false;
  }
//  var negative=false

//    expression+='*-1'
//    outputExpression= '-' + outputExpression;
//    negative==true;
//    console.log(expression)
//    document.getElementById('calc-output').innerHTML=outputExpression;}
//  if (math=="negation" && negative==true){
//    expression+='*-1'
//    outputexpression= outputExpression;
//    negative==false;
//    console.log(expression)
//    document.getElementById('calc-output').innerHTML=outputExpression;}
  if (math=="negation"){
	  let z=outputExpression.split('')
	  expression+="*-1";
	  let x=true;
	  for(let i=outputExpression.length-1;i>=0;i--){
		  if((outputExpression[i]=='x'||outputExpression[i]=='/'||outputExpression[i]=='+'||outputExpression=='-') && x==true){
			  x=false;
			  var negArray=[];
			  for(let j=0; j<=i; j++){
			 let temp=z.shift();
			negArray[j]=temp;
			  }
		 z.unshift('-');
		console.log(z);
		let arrayLength=negArray.length;
	  for(let k=0;k<arrayLength;k++){
	  let temp2=negArray.pop();
		z.unshift(temp2);
		console.log(z);
			 }
		  }
		}
	  outputExpression=z.join('');
 	  document.getElementById('calc-output').innerHTML=outputExpression;
  }



  if (math=='0' && count<=9){
    expression+='0';
    outputExpression+='0';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='pi'&& count<=9){
    expression+='3.14';
    outputExpression+='π';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='square'){
    expression+='**2';
    outputExpression+='^2';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='cube'){
    expression+='**3';
    outputExpression+='^3';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='power'){
    expression+='**';
    outputExpression+='^';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='1'&& count<=9){
    expression+='1';
    outputExpression+='1';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='2'&& count<=9){
    expression+='2';
    outputExpression+='2';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='3'&& count<=9){
    expression+='3';
    outputExpression+='3';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='4'&& count<=9){
    expression+='4';
    outputExpression+='4';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='5'&& count<=9){
    expression+='5';
    outputExpression+='5';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='6'&& count<=9){
    expression+='6';
    outputExpression+='6';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='7'&& count<=9){
    expression+='7';
    outputExpression+='7';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='8'&& count<=9){
    expression+='8';
    outputExpression+='8';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
  if (math=='9'&& count<=9){
    expression+='9';
    outputExpression+='9';
    document.getElementById('calc-output').innerHTML=outputExpression;
    notNumber=true;
    count++;
  }
}
  //if (math=='ans' && ans != ''){
  //expression+='ans';
  //outputExpression+='ans';
  //document.getElementById('calc-output').innerHTML=outputExpression;
//  notNumber=true;
//  numberDec=false;
//  }
//  document.getElementById("calc-output").innerHTML=Number(outputExpression).toLocaleString();
//}




function AC(){
  expression='';
  outputExpression='';
  notNumber=false;
  document.getElementById('calc-output').innerHTML=outputExpression;
	zeroDec=false;
	decimalPoint=true;
	numberDec=false;
	count=1;
  document.getElementById('calc-output').innerHTML=0;
}

function equals(math){
  if(math=='=' && notNumber==false){
    document.getElementById('calc-output').innerHTML="Error";
    }
  let finalExpression=eval(expression);

  if(math== '='){
    if (finalExpression==Infinity){
      document.getElementById('calc-output').innerHTML="Error";
    }
    else if(finalExpression>999999999){
      let exponent=finalExpression.toString().length-1;
      document.getElementById('calc-output').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;
    }

    else{
      console.log(finalExpression.toLocaleString());
      document.getElementById('calc-output').innerHTML=Number(finalExpression).toLocaleString();
    }

    try {
      finalExpression
    }
    catch(err) {
      document.getElementById('calc-output').innerHTML="What did you even do to get this message.";
    }
  }
    ans=finalExpression;
    expression= ans;
    outputExpression=ans;
    console.log(expression);
}
