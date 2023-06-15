//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	background_image=new Image();
	background_image.onload=uploadBackground;
	background_image.src="parkingLot.jpg";

	greencar=new Image();
	greencar.onload=uploadgreencar;
	greencar.src="car2.png";
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y>0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
	if (greencar_y<300){
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (greencar_x>0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
	if (greencar_x<700){
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadgreencar();
	}
}
