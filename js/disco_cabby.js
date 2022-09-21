var y;
var changeDirection;

var timestamp = 0;
var index = 0;
var quotes = ['Hey, I\'m Disco Cabby.',
              'Thanks for visiting!',
              'You can find our midnight snacks menu made with our sour kimchi batches!']

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style("z-index", "-1000");
    canvas.elt.style.position = "fixed"; // manually set the style
    canvas.style("top", "0");
    canvas.style("left", "0");
    img=loadImage('images/speech.png');

    changeDirection = false;
    y = 25;
}

function draw() {
  background(0);
  
  translate(windowWidth-425, windowHeight-275);

  push();
  scale(0.5);
  image(img, 250, y-25, img.width / 1.1, img.height / 1.1);
  translate(0,100);
  fill(random(99), 150, 71);
  square(200, y, 25);
  square(225, y, 25);
  square(250, y, 25);
  
  square(175, y+25, 25);
  square(200, y+25, 25);
  square(225, y+25, 25);
  square(250, y+25, 25);
  
  square(25, y+50, 25);
  square(50, y+50, 25);
  square(100, y+50, 25);
  square(175, y+50, 25);
  square(200, y+50, 25);
  square(225, y+50, 25);
  square(250, y+50, 25);
  
  square(25, y+75, 25);
  square(50, y+75, 25);
  square(75, y+75, 25);
  square(100, y+75, 25);
  square(125, y+75, 25);
  square(150, y+75, 25);
  square(175, y+75, 25);
  square(200, y+75, 25);
  square(225, y+75, 25);
  square(250, y+75, 25);
  square(275, y+75, 25);
  
  fill(random(116), 186, 78);
  square(25, y+100, 25);
  square(50, y+100, 25);
  square(75, y+100, 25);
  square(100, y+100, 25);
  square(125, y+100, 25);
  square(150, y+100, 25);
  square(175, y+100, 25);
  square(200, y+100, 25);
  square(225, y+100, 25);
  square(250, y+100, 25);
  square(275, y+100, 25);
  

  square(50, y+125, 25);
  square(75, y+125, 25);
  square(100, y+125, 25);
  square(125, y+125, 25);
  square(150, y+125, 25);
  square(175, y+125, 25);
  square(200, y+125, 25);
  square(225, y+125, 25);
  square(250, y+125, 25);
  square(275, y+125, 25);
  
  /* BRIGHT GREEN */
  fill(random(154), 219, 92);
  square(50, y+150, 25);
  square(75, y+150, 25);
  square(100, y+150, 25);
  fill(0);
  square(125, y+150, 25);
  fill(random(154), 219, 92);
  square(150, y+150, 25);
  square(175, y+150, 25);
  square(200, y+150, 25);
  fill(0);
  square(225, y+150, 25);
  fill(random(154), 219, 92);
  square(250, y+150, 25);
  square(275, y+150, 25);
  
  square(75, y+175, 25);
  square(100, y+175, 25);
  square(125, y+175, 25);
  fill(random(201), 212, 190);
  square(150, y+175, 25);
  fill(random(154), 219, 92);
  square(175, y+175, 25);
  square(200, y+175, 25);
  square(225, y+175, 25);
  fill(random(201), 212, 190);
  square(250, y+175, 25);
  fill(random(154), 219, 92);
  square(275, y+175, 25);
  
  square(75, y+200, 25);
  square(100, y+200, 25);
  square(125, y+200, 25);
  fill(random(224), 232, 216);
  square(150, y+200, 25);
  //fill(0);                // NOSE
  fill(random(154), 219, 92);
  square(175, y+200, 25);
  square(200, y+200, 25);
  square(225, y+200, 25);
  fill(random(224), 232, 216);
  square(250, y+200, 25);
  fill(random(154), 219, 92);
  square(275, y+200, 25);
  
  square(75, y+225, 25);
  square(100, y+225, 25);
  fill(0);
  square(125, y+225, 25);
  fill(random(240), 252, 227);
  square(150, y+225, 25);
  fill(random(154), 219, 92);
  square(175, y+225, 25);
  square(200, y+225, 25);
  fill(0);
  square(225, y+225, 25);
  fill(random(240), 252, 227);
  square(250, y+225, 25);
  fill(random(154), 219, 92);
  square(275, y+225, 25);
  
  square(100, y+250, 25);
  fill(random(240), 252, 227);
  square(125, y+250, 25);
  fill(0);
  square(150, y+250, 25);
  //fill(154, 219, 92);
  square(175, y+250, 25);
  square(200, y+250, 25);
  fill(random(240), 252, 227);
  square(225, y+250, 25);
  square(250, y+250, 25);
  fill(random(154), 219, 92);
  square(275, y+250, 25);
  
  square(100, y+275, 25);
  fill(random(240), 252, 227);
  square(125, y+275, 25);
  square(150, y+275, 25);
  fill(random(154), 219, 92);
  square(175, y+275, 25);
  square(200, y+275, 25);
  fill(random(240), y+275, 227);
  square(225, y+275, 25);
  square(250, y+275, 25);
  fill(random(154), 219, 92);
  square(275, y+275, 25);
  
  fill(random(209), 222, 202);
  square(125, y+300, 25);
  square(150, y+300, 25);
  square(175, y+300, 25);
  square(200, y+300, 25);
  square(225, y+300, 25);
  square(250, y+300, 25);
  
  square(150, y+325, 25);
  square(175, y+325, 25);
  square(200, y+325, 25);
  square(225, y+325, 25);
  pop();
  
  textSize(17);
  text(quotes[index], 162, (y*0.05)+40, 230, 80);
  
  if (millis() - timestamp > 10000) {
    index++;
    timestamp = millis();
    if (index > quotes.length - 1) {
      index = 0;
    }
  }
  
  if(y>40){
		changeDirection=true}
	else if (y<=25){
		changeDirection=false}
	
	if (y>=0 && changeDirection == false){
		y=y+0.07}
	else if(changeDirection == true){
		y=y-0.07}
}

/* let xpos, ypos;     // Starting position of shape
let yspeed = 1;     // Speed of the shape
let ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('cabbagehelp.png');
  noStroke();
  frameRate(30);
  xpos = 0;
  ypos = height / 2;
}

function draw() {
  background(255);
  ypos = ypos + yspeed * ydirection;
  if (ypos > height - img.height || ypos < img.height) {
    ydirection *= -1;
  }
  image(img, xpos, ypos, img.width / 2, img.height / 2);
} */