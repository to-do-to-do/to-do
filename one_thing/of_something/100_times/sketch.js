
let popcorn = [];
let corn = [];

let n = 0;

function preload(){
	for(i=0;i<100;i++){
		popcorn[i] = loadImage("popcorn/popcorn-"+(i+1)+".png");
	}
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	corn[0] = new obj(n);
	noCursor();
	textSize(30);
	fill(250,180,10);
}

function draw(){

	background(255);

	if(n<100){
		corn[0].move();
		for(i=0;i<corn.length;i++){
			corn[i].display();
		}
	}else{
		cursor();
		noFill();
	}

	text(100-n,50,50);
}

function obj(N){

	this.x = width/2;
	this.y = height/2;

	this.p = N;
	this.r = 0;

	this.display = ()=>{
		push();
	//
		translate(this.x,this.y);
		rotate(this.r);

		image(popcorn[this.p],-popcorn[this.p].width*0.1,-popcorn[this.p].height*0.1,popcorn[this.p].height*0.2,popcorn[this.p].height*0.2);
		pop();
	}

	this.move = ()=>{
		this.x = mouseX;
		this.y = mouseY;
		this.r = frameCount*0.01;
	}
}

function mousePressed(){
	print(n);
	n++;
	if(n<100){
		corn.unshift(new obj(n));
	}
}
