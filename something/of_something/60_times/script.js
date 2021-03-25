
let count = 0;
let started = false;

window.onload = ()=>{
	let startbox = document.getElementById("startbox");
	startbox.addEventListener("click",start);
}
function start(){
		started = true;
		document.getElementById("startbox").setAttribute("style","display:none;");
		countDown();
}

function countDown(){
	count++;
	let command = document.getElementById("command");
	let random = Math.floor(Math.random()*VERBSVB.length);
	let text = VERBSVB[random];
	if(count<4){
		text = 4-count;
	}
	command.innerText = text;
	if(count<64){
		setTimeout(countDown,1000);
	}else{
		// command.innerText = "finished!";
		count = 0;
		started=false;
		setTimeout(()=>{
			command.innerText = "click to start";
			document.getElementById("startbox").setAttribute("style","display:block;");
		},3000);
	}
}
