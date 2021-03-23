

let elements = 3;
let element = [];
let sample = [];
let live = false;
let brush = [];

function preload(){
	loadSample(0);
	for(i=0;i<elements;i++){
		brush.push(loadImage("images/brush"+i+".png"));
	}
}

function loadSample(n){
	sample.push(createAudio("sounds/"+n+".m4a",()=>{
		print("sample "+n+" loaded")
		if(n<elements){
			loadSample(n+1);
		}else{
			live = true;
		}
	}
	));
}


function setup(){
	createCanvas(windowWidth,windowHeight);
	strokeWeight(10);
	for(i=0;i<elements;i++){
		element.push( new Element(i));
	}
}

function draw(){
	text("click to begin walk",width/2,height/2);
	if(live==true){
		background(130);
		for(i=0;i<elements;i++){
			element[i].display();
			element[i].adjust();
			sample[i].volume(element[i].vol);
			//sample[i].pan(element[i].pan,0.5);
		}
	}
}

function mousePressed(){
	for(i=0;i<elements;i++){
		sample[i].play();
	}
}


function Element(n){
	this.x = random(100,width-100);
	this.y = random(100,height-100);
	this.xmove = random(-1,2);
	this.ymove = random(-1,1);
	this.n = n;
	this.vol;
	this.pan;

	this.display = ()=>{
		let img = brush[this.n];
		image(img,this.x-img.width/2,this.y-img.width/2);
	//	point(this.x,this.y);
	}
	this.adjust = ()=>{
		this.x+= this.xmove;
		this.y+= this.ymove;
		if(this.x<0 || this.x>width){
			this.xmove *= -1;
		}
		if(this.y<0 || this.y>height){
			this.ymove *= -1;
		}

		let xd = this.x-mouseX;
		let yd = this.y-mouseY;
		let dist = sqrt(pow(xd,2)+pow(yd,2));
		this.pan = map(xd,-width,width,-1,1);
		this.vol = 1/(1+(dist*0.01));
	}
}
