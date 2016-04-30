console.log("All files loaded!")
// For checking js file loading.
var notices = 0;
var senpaiShip = 0;
var senpaiPoints = 0;
var senpaiPrice = 10;
var pointCounter = 0;
var SPcounter = 1;
var senpaiStatus = "STRANGER";
var seconds = 0;
var ascensions = 0;
var autoNoticer = 0;
var noticerPrice = 100;
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
		if(pics.src.match("ASCEND.gif")){
		}
		else{
			pics.src = "ASCEND.gif";
		}
	}
	else if (senpaiShip >= 6){
		document.getElementById("mainText").innerHTML = "You must really like Kohai.";
		if(pics.src.match("youust.gif")){
		}
		else{
			pics.src = "youust.gif";
		}
	}
	else if (senpaiShip >= 5){
		document.getElementById("mainText").innerHTML = "Kohai made you a clicker.";
		if(pics.src.match("itwasaclick.gif")){
		}
		else{
			pics.src = "itwasaclick.gif";
		}
	}
	else if (senpaiShip >= 4){
		document.getElementById("mainText").innerHTML = "Kohai has made you something.";
		if(pics.src.match("forsenpai.jpg")){
		}
		else{
			pics.src = "forsenpai.jpg";
		}
	}
	else if (senpaiShip >= 3){
		document.getElementById("mainText").innerHTML = "Kohai is simply happy.";
				if(pics.src.match("happy.jpg")){
		}
		else{
			pics.src = "happy.jpg";
		}

	}
	else if (notices >= 70 && senpaiShip >= 2){
		document.getElementById("mainText").innerHTML = "Kohai blushes when you notice him.";
				if(pics.src.match("Blush.gif")){
		}
		else{
			pics.src = "Blush.gif";
		}

	}
	else if (notices >= 50 && senpaiShip >= 1){
		document.getElementById("mainText").innerHTML = "Kohai wants to be noticed more!";
		if(pics.src.match("NoticeMore.gif")){
		}
		else{
			pics.src = "NoticeMore.gif";
		}


	}
	else if (notices != 0){
		document.getElementById("mainText").innerHTML = "Kohai bounces around happily.";
		if(pics.src.match("bounce.gif")){
		}
		else{
			pics.src = "bounce.gif";
		}

	}
	else{
		document.getElementById("mainText").innerHTML = "Kohai awaits your attention..."
	}
	
	if(senpaiPoints - senpaiPrice < 0){
		document.getElementById("upSenpaiButton").className = "clicky disabled";
	}
	else{
		document.getElementById("upSenpaiButton").className = "clicky";
	}
		if(senpaiPoints - noticerPrice < 0){
		document.getElementById("autoNoticeButton").className = "clicky disabled";
	}
	else{
		document.getElementById("autoNoticeButton").className = "clicky";
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
			ascensions++;
			notices = 0;
			senpaiShip = 0;
			senpaiPoints = 0;
			senpaiPrice = 10;
			pointCounter = 0;
			SPcounter = 1;
			senpaiStatus = "STRANGER";
			
			if (ascensions == 1){
				document.getElementById("ascensionText").innerHTML = "You have ASCENDED " + ascensions + " time in " + seconds + "seconds.";
			}
			else{
				document.getElementById("ascensionText").innerHTML = "You have ASCENDED " + ascensions + " times in " + seconds + "seconds.";
			}
		}
		if (senpaiShip != 7){
		document.getElementById("upSenpaiButton").innerHTML = "Upgrade Senpaiship " + senpaiPrice + " SP";
		
		document.getElementById("text2").innerHTML = "Upgraded senpaiship to: " + senpaiStatus + ".";
		}
		if(senpaiPoints - senpaiPrice < 0){
		document.getElementById("upSenpaiButton").className = "clicky disabled";
		}
		else{
			document.getElementById("upSenpaiButton").className = "clicky";
		}
	}
	else{
	document.getElementById("text3").innerHTML = "You don't have enough Senpai points.";
	}
}
//autoNoticer
function upgrade2(){
	if(senpaiPoints - noticerPrice > 0){
		autoNoticer++;
		if (autoNoticer == 1){
			setInterval(noticeTimer,5000)
		}
	}
	else{
		document.getElementById("text3").innerHTML = "You don't have enough Senpai points.";
	}
		if(senpaiPoints - noticerPrice < 0){
		document.getElementById("autoNoticeButton").className = "clicky disabled";
	}
	else{
		document.getElementById("autoNoticeButton").className = "clicky";
	}
}

function noticeTimer(){
	senpaiPoints = senpaiPoints + autoNoticer;
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
//timer
setInterval(timer,1000);
function timer(){
	seconds++;
}
