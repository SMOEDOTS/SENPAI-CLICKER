var clicks = 0
function click(){
	clicks++;
	if (clicks = 1){
		document.getElementById("text1").innerHTML = "You have noticed Kohai " + clicks + " time.";
	}
	else{
		document.getElementById("text1").innerHTML = "You have noticed Kohai " + clicks + " times.";
	}
}