var students = [['Martin',76], ['Thomas',85], ['Klaus',65], ['Maria',93],['David',81]];

var Avgmarks = 0;

for (var i = 0; i < students.length; i++) {
	Avgmarks += students[i][1];
	var avg = (Avgmarks/students.length);
}

console.log("Average grade:" + (Avgmarks)/students.length);
document.getElementById("bob").innerText = avg;


if (avg < 60){
	console.log("Grade: F");
}
else if (avg <70) {
	console.log("Grade:D");
}
else if (avg <80){
	console.log("Grade C");
}
else if (avg <90){
	console.log("Grade B");
}
else if (avg <100){
	console.log("Grade A")
}