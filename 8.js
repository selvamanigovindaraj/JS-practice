function checkNumber(){
		var num=Number(document.getElementById('input1').value);
		var text=0;
		var numb=[1,2,2,,3,3,5,5,6,6,9,9,8,8,8,6,6,77,,99,55,4,4,4,4,4,8,8,8,8,8];
		for(i=0;i<numb.length;i++){
			if(numb[i]==num){
				text++;
			
			}
		
		}
	document.getElementById('out').innerHTML=text;
	document.getElementById('inp1').innerHTML=num;
}
function onFocusFunction(){
	document.getElementById('input1').style.background = "yellow";
}
function onBlurFunction(){
	document.getElementById('input1').style.background = "red";
}
function downFunction(){
	document.getElementById('input1').style.background = "blue";
}
function upFunction(){
	document.getElementById('input1').style.background = "green";
}
function dblAlert(){
	num=Number(document.getElementById('input1').value);
	alert("The input value is "+ num);
}
function pressFunction(){
	alert("You have pressed a key");
}
function fruitFunction(){
	var text;
	var fruits = document.getElementById("input2").value;
	switch(fruits){
		case "Banana":
			text="Banana is a Fruit";
			break;
		case "Apple":
			text="Apple is a Fruit";
			break;
		case "Orange":
			text="Orange is a Fruit";
			break;
		default:
			text="It is a Fruit";
		}
	document.getElementById('output2').innerHTML=text;
		
}
function blurFunction(){
	var num=document.getElementById('input3').value;
	var text = ""
	var i = 0;

	do {
		text += "<br>The number is " + i;
		i++;
	}
	while (i < num);  

	document.getElementById("output3").innerHTML = text;
}