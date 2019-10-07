
// der fehler war =, damit hat er nur eins angezeigt, mit += gehts es!!!!//
for (var i = 1; i <= 100; i++){
	if ( i%3 === 0 && i%5 === 0)
	{
		document.getElementById("bob").innerHTML += i + "FizzBuzz" +"<br>";

	}
	else if (i%3 === 0)
	{
		document.getElementById("bob").innerHTML += i + "Fizz"+"<br>";
	}
	else if (i%5 === 0)
	{
		document.getElementById("bob").innerHTML += i + "Buzz"+"<br>";
	}
	else 
	{
		document.getElementById("bob").innerHTML += i +"<br>";
	}
}

