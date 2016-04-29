console.log("All files loaded!")
// For checking js file loading.
var notices = 0;
var senpaiShip = 0;
var senpaiPoints = 0;
var senpaiPrice = 10;
var pointCounter = 0;
var SPcounter = 1;
var senpaiStatus = "STRANGER";
var cat = true;

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
		senpaiPoints = senpaiPoints + SPcounter;
		console.log("Senpai Point Get!")
		if (senpaiPoints == 1){
			document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Point.";
		}
		else{
			document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Points.";
		}
		pointCounter = 0;
	}
	if (senpaiShip == 7){
		document.getElementById("mainText").innerHTML = "Kohai awaits ASCENSION.";
	}
	else if (senpaiShip >= 6){
		document.getElementById("mainText").innerHTML = "You must really like Kohai.";
	}
	else if (senpaiShip >= 5){
		document.getElementById("mainText").innerHTML = "Kohai made you a clicker.";
	}
	else if (senpaiShip >= 4){
		document.getElementById("mainText").innerHTML = "Kohai has made you something.";
	}
	else if (senpaiShip >= 3){
		document.getElementById("mainText").innerHTML = "Kohai is sinply happy.";
	}
	else if (notices >= 70 && senpaiShip >= 2){
		document.getElementById("mainText").innerHTML = "Kohai blushes when you notice him.";
	}
	else if (notices >= 50 && senpaiShip >= 1){
		document.getElementById("mainText").innerHTML = "Kohai wants to be noticed more!";
	}
	else if (notices != 0){
		document.getElementById("mainText").innerHTML = "Kohai bounces around happily.";
	}
	else{
		document.getElementById("mainText").innerHTML = "Kohai awaits your attention..."
	}
}
//When upgrade clicked
function upgrade(){
	console.log("Upgrade clicked")
	if (senpaiPoints - senpaiPrice >= 0){
		senpaiPoints = senpaiPoints - senpaiPrice;
		senpaiShip++;
		
		if(senpaiShip == 1){
			senpaiStatus = "PERSON NEXT DOOR";
			senpaiPrice = 20;
			SPcounter = 2;
		}
		else if(senpaiShip == 2){
			senpaiStatus = "ACQUAINTANCE";
			senpaiPrice = 100;
			SPcounter = 5; 
		}
		else if(senpaiShip == 3){
			senpaiStatus = "FRIEND";
			senpaiPrice = 150;
			SPcounter = 10;
		}
		else if(senpaiShip == 4){
			senpaiStatus = "SECOND BEST FRIEND";
			senpaiPrice = 200;
		}
		else if(senpaiShip == 5){
			senpaiStatus = "BEST FRIEND";
			senpaiPrice = 500;
			SPcounter = 20;
		}
		else if(senpaiShip == 6){
			senpaiStatus = "MORE THAN FRIENDS??";
			senpaiPrice = 1000;
			SPcounter = 50;
		}
		else if(senpaiShip == 7){
			senpaiStatus = "ASCEND"
			senpaiPrice = 2000;
			document.getElementById("upSenpaiButton").innerHTML = "ASCEND " + senpaiPrice + " SP"
		}
		else if(senpaiShip == 8){
			cont = false;
			document.getElementById("upSenpaiButton").innerHTML = "THANK YOU FOR PLAYING";
			document.getElementById("mainText").innerHTML = "THANK YOU FOR PLAYING";
			document.getElementById("text1").innerHTML = "THANK YOU FOR PLAYING";
			document.getElementById("text2").innerHTML = "THANK YOU FOR PLAYING";
			document.getElementById("text3").innerHTML = "THANK YOU FOR PLAYING";
			alert("THANK YOU SENPAI FOR PLAYING! You're the best.");
		}
		if (senpaiShip != 7){
		document.getElementById("upSenpaiButton").innerHTML = "Upgrade Senpaiship " + senpaiPrice + " SP";
		
		document.getElementById("text2").innerHTML = "Upgraded senpaiship to: " + senpaiStatus + ".";
		}
	}
	else{
	document.getElementById("text3").innerHTML = "You don't have enough Senpai points.";
	}
}
//clock
setInterval(tickTock,1500);
function tickTock(){
	if(cat == true){
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
			document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Point.";
		}
		else if(senpaiPoints == 0){
			document.getElementById("text3").innerHTML = "You don't have any Senpai Points.";
		}
		else{
			document.getElementById("text3").innerHTML = "You have " + senpaiPoints + " Senpai Points.";
		}
		if (senpaiShip != 7){
			document.getElementById("text2").innerHTML = "Current Senpaiship: " + senpaiStatus;
		}
		else{
		document.getElementById("text2").innerHTML = "ASCEND ASCEND ASCEND";
		}
	}
}