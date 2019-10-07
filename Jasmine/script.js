
var today = new Date();

var month = today.getMonth();
var year = today.getFullYear();
var day = today.getDate();
var weekday = today.getDay();

var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dateToday = week[weekday]+", "+day+". "+month+" "+year;

var celsius = Math.floor(Math.random() * 30) - 5;

if (celsius < 0)	var temp = "very very cold";
else if (celsius < 5)	var temp = "very cold";
else if (celsius < 10)	var temp = "cold";
else if (celsius < 20)	var temp = "medium";
else if (celsius < 25)	var temp = "warm!";

function refresh() {
	location.reload();
}