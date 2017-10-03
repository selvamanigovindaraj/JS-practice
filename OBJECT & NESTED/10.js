var student={
	address:{},
	education:{
		ug:{
			addressUg:{},
		},
		pg:{
			addressPg:{},
		}
	}
};
function objFunction(){
	
	student.name=document.getElementById('name').value;
	student.age=document.getElementById('age').value;
//	var student.address={}
	student.address.city=document.getElementById('city').value;
	student.address.state=document.getElementById('state').value;
	student.address.country=document.getElementById('country').value;
	student.education.ug.degree=document.getElementById('degreeUg').value;
	student.education.ug.college=document.getElementById('collegeNameUg').value;
	student.education.ug.addressUg.city=document.getElementById('cityUg').value;
	student.education.ug.addressUg.state=document.getElementById('stateUg').value;
	student.education.ug.addressUg.country=document.getElementById('countryUg').value;
	student.education.ug.marks=document.getElementById('marksUg').value;
	student.education.pg.degree=document.getElementById('degreePg').value;
	student.education.pg.college=document.getElementById('collegeNamePg').value;
	student.education.pg.addressPg.city=document.getElementById('cityPg').value;
	student.education.pg.addressPg.state=document.getElementById('statePg').value;
	student.education.pg.addressPg.country=document.getElementById('countryPg').value;
	student.education.pg.marks=document.getElementById('marksPg').value;
	
	
	document.getElementById('output').innerHTML=student.name+" "+student.age+"<br>"+student.address.city+", "+student.address.state+" ,"+student.address.country+"<br>"+
	student.education.ug.degree+", "+student.education.ug.college+"<br>"+
	student.education.ug.addressUg.city+","+student.education.ug.addressUg.state+" ,"+student.education.ug.addressUg.country+"<br>"+
	student.education.ug.marks+"<br>"+
	student.education.pg.degree+" "+student.education.pg.college+"<br>"+
	student.education.pg.addressPg.city+","+student.education.pg.addressPg.state+", "+student.education.pg.addressPg.country+"<br>"+
	student.education.pg.marks;
	console.log(student);
}