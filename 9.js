
function myFunction(){
	var x=document.getElementById('input1').value;
	var y= Number(document.getElementById('input2').value);
	document.getElementById("demo").innerHTML = (x==y);
}
function myFunction1(){
	var x=document.getElementById('input1').value;
	var y= Number(document.getElementById('input2').value);
	document.getElementById("demo").innerHTML = (x === y);
}
function myFunction2(){
	var x=document.getElementById('input1').value;
	var y= Number(document.getElementById('input2').value);
	document.getElementById("demo").innerHTML = (x != y);
}
function myFunction3(){
	var x=document.getElementById('input1').value;
	var y= Number(document.getElementById('input2').value);
	document.getElementById("demo").innerHTML = (x !== y);
}
function myFunction4(){
	var x=document.getElementById('input3').value;
	var y=document.getElementById('input4').value;
	document.getElementById('demo1').innerHTML=(x>y);
}
function myFunction5(){
	var x=document.getElementById('input3').value;
	var y=document.getElementById('input4').value;
	document.getElementById('demo1').innerHTML=(x>=y);
}
function myFunction7(){
	var x=document.getElementById('input3').value;
	var y=document.getElementById('input4').value;
	document.getElementById('demo1').innerHTML=(x<y);
}
function myFunction8(){
	var x=document.getElementById('input3').value;
	var y=document.getElementById('input4').value;
	document.getElementById('demo1').innerHTML=(x<=y);
}