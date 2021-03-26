
let click = [];
let count = 0;
let started = false;

function loadSounds(){
	for(i=0;i<28;i++){
		click.push(new Audio("samples/click"+i+".mp3"));
	}
}
loadSounds();

window.onload = ()=>{
	let startbox = document.getElementById("startbox");
	startbox.addEventListener("click",start);
}
function start(){
		started = true;
		document.getElementById("startbox").setAttribute("style","display:none;");
		//document.getElementById("commandbox").setAttribute("style","display:none;");
		countDown();
}

function countDown(){
	count++;
	let command = document.getElementById("command");
	let random = Math.floor(Math.random()*VERBSVB.length);
	let text = "click";

	if(count<4){
		text = 4-count;
	}else if(count>=4){
		text = VERBSVB[random];
		click[Math.floor(Math.random()*click.length)].play();
	}

	command.innerText = text;

	if(count<64){
		setTimeout(countDown,1000);
	}else{
		// command.innerText = "finished!";
		count = 0;
		started=false;
		setTimeout(()=>{
			command.innerText = "click";
			document.getElementById("startbox").setAttribute("style","display:block;");
			//document.getElementById("commandbox").setAttribute("style","display:block;");
		},3000);
	}
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	angleMode(DEGREES);
	stroke(255,0,255);
	fill(255,0,255);
	textSize(20);
}

function draw(){
	translate(width/2,height/2);
	background(30);
	if(count>=4){
		rotate((6*(count-4)));
	}
	text(command.innerText,-height/3,0);
	line(0,4,-height/3,4);
}
