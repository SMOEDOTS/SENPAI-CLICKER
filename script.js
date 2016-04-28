console.log("All files loaded!")
var notices = 0;
function notice(){
	notices++;
	console.log("Nya~!")
	if (notices == 1){
		document.getElementById("text").innerHTML = "You have noticed Kohai " + notices + " time.";
	}
	else{
		document.getElementById("text").innerHTML = "You have noticed Kohai " + notices + " times.";
	}
}
function upgrade(){
	console.log("Upgrade clicked")
}