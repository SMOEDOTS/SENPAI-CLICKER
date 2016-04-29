console.log("All files loaded!")
// For checking js file loading.
var notices = 0;
var senpaiShip = 0;
var senpaiPoints = 0;
var senpaiPrice = 10;
var pointCounter = 0;
var senpaiStatus = "STRANGER";

//When notice clicked
function notice(){
	notices++;
	pointCounter++;
	console.log("Nya~!")
	
	if (notices == 1){
		document.getElementById("text").innerHTML = "You have noticed Kohai " + notices + " time.";
	}
	else{
		document.getElementById("text").innerHTML = "You have noticed Kohai " + notices + " times.";
	}
	if (pointCounter == 5){
		senpaiPoints++;
		if (senpaiPoints == 1){
			document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Point."
		}
		else{
			document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Points."
		}
		pointCounter = 0;
	}
}
//When upgrade clicked
function upgrade(){
	console.log("Upgrade clicked")
	if (senpaiPoints - senpaiPrice >= 0){
		
		senpaiShip++;
		
		if(senpaiShip == 1){
			senpaiStatus = "PERSON NEXT DOOR"
		}
		
		document.getElementById("text2").innerHTML = "Upgraded senpaiship to: " + senpaiStatus + ".";
	}
	else{
		document.getElementById("text3").innerHTML = "You don't have enough Senpai points."
	}
}
//clock
setInterval(tickTock,1500);
function tickTock(){
	
	if (notices == 1){
	document.getElementById("text").innerHTML = "You have noticed Kohai " + notices + " time.";
	}
	else if(notices == 0){
		document.getElementById("text").innerHTML = "You haven't noticed Kohai yet.";
	}
	else{
		document.getElementById("text").innerHTML = "You have noticed Kohai " + notices + " times.";
	}
	if (senpaiPoints == 1){
		document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Point."
	}
	else if(senpaiPoints == 0){
		document.getElementById("text3").innerHTML = "You don't have any Senpai Points."
	}
	else{
		document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Points."
	}
	document.getElementById("text2").innerHTML = "Current Senpaiship: " + senpaiStatus;
	
}