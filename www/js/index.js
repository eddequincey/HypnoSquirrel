var rotation = 0;
var int;

function rotate(){
	rotation = rotation + 10;
	document.getElementById("squirrel").style.transform = "rotate("+rotation+"deg)";;
	
}

function start(){
	int = setInterval(rotate, 30);
	document.getElementById("startBtn").disabled = true;
	console.log("Interval " + int + " started");
}

function stop(){
	clearInterval(int);
	document.getElementById("startBtn").disabled = false;				
	console.log("Interval " + int + " stopped");
}

function init(){
	startBtn.addEventListener("click", start);
	stopBtn.addEventListener("click", stop);
}

