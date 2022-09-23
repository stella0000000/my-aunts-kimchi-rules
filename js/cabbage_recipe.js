let y, changeDirection;
let r1 = 99; let g1 = 150; let b1 = 71;
let r2 = 116; let g2 = 186; let b2 = 78;
let r3 = 154; let g3 = 219; let b3 = 92;

let timestamp = 0;
let index = 0;
let quotes = ['Hey, I\'m Cabbagette! You can call me Cabby.',
              'Hover over dashed ingredients to see what they look like!',
              'Ask not what your cabbage can do for you, but what you can do for your cabbage.',
              "Radish dries quickly once its cut, let's try avoiding that!",
              'If you want it X-ier, add more... X!',
              'Lagom [ˈlɑ̂ːɡɔm] Swedish: not too much, not too little. Just the right amount.',
              'Will you do anything differently next time?',
              'If storing in a flat container, place cabbages in an alternating pattern face up.',
              'Visit Midnight Snacks for meal ideas with your sour batches.']

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

    //eat = loadImage("images/chopsticks.png");
    //angleMode(DEGREES);
}

function mouseWheel(e) {
  // if (r1 <= 240 && r1 >= 0) r1 += e.delta / 60;
  // if (r1 >= 240) {
  //   r1 = 240;
  // } else if (r1 <= 0) {
  //   r1 = 0;
  // }
  // if (g1 <= 1) g1 = 0;
  // if (b1 <= 1) b1 = 0;
  // g1 = 150 - r1;
  // b1 = 71 - r1;

  // if (r2 <= 200 && r2 >= 0) r2 += e.delta / 50;
  // if (r2 >= 200) {
  //   r2 = 200;
  // } else if (r2 <= 0) {
  //   r2 = 0;
  // }
  // if (g2 <= 1) g2 = 0;
  // if (b2 <= 1) b2 = 0;
  // g2 = 186 - r2;
  // b2 = 78 - r2;

  // if (r3 <= 170 && r3 >= 0) r3 += e.delta / 40;
  // if (r3 >= 170) {
  //   r3 = 170;
  // } else if (r3 <= 0) {
  //   r3 = 0;
  // }
  // if (g3 <= 1) g3 = 0;
  // if (b3 <= 1) b3 = 0;
  // g3 = 219 - r3;
  // b3 = 92 - r3;
}

function draw() {
  background(255, 224, 246);
  
  translate(windowWidth-375, windowHeight-240);
  push();
  scale(0.45);
  image(img, 250, y-25, img.width / 1.1, img.height / 1.1);
  translate(0,100);
  fill(r1, g1, b1);
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
  
  fill(r2, g2, b2);
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
  fill(r3, g3, b3);
  square(50, y+150, 25);
  square(75, y+150, 25);
  square(100, y+150, 25);
  fill(0);
  square(125, y+150, 25);
  fill(r3, g3, b3);
  square(150, y+150, 25);
  square(175, y+150, 25);
  square(200, y+150, 25);
  fill(0);
  square(225, y+150, 25);
  fill(r3, g3, b3);
  square(250, y+150, 25);
  square(275, y+150, 25);
  
  square(75, y+175, 25);
  square(100, y+175, 25);
  square(125, y+175, 25);
  fill(201, 212, 190);
  square(150, y+175, 25);
  fill(r3, g3, b3);
  square(175, y+175, 25);
  square(200, y+175, 25);
  square(225, y+175, 25);
  fill(201, 212, 190);
  square(250, y+175, 25);
  fill(r3, g3, b3);
  square(275, y+175, 25);
  
  square(75, y+200, 25);
  square(100, y+200, 25);
  square(125, y+200, 25);
  fill(224, 232, 216);
  square(150, y+200, 25);
  //fill(0);                // NOSE
  fill(r3, g3, b3);
  square(175, y+200, 25);
  square(200, y+200, 25);
  square(225, y+200, 25);
  fill(224, 232, 216);
  square(250, y+200, 25);
  fill(r3, g3, b3);
  square(275, y+200, 25);
  
  square(75, y+225, 25);
  square(100, y+225, 25);
  fill(0);
  square(125, y+225, 25);
  fill(240, 252, 227);
  square(150, y+225, 25);
  fill(r3, g3, b3);
  square(175, y+225, 25);
  square(200, y+225, 25);
  fill(0);
  square(225, y+225, 25);
  fill(240, 252, 227);
  square(250, y+225, 25);
  fill(r3, g3, b3);
  square(275, y+225, 25);
  
  square(100, y+250, 25);
  fill(240, 252, 227);
  square(125, y+250, 25);
  fill(0);
  square(150, y+250, 25);
  square(175, y+250, 25);
  square(200, y+250, 25);
  fill(240, 252, 227);
  square(225, y+250, 25);
  square(250, y+250, 25);
  fill(r3, g3, b3);
  square(275, y+250, 25);
  
  square(100, y+275, 25);
  fill(240, 252, 227);
  square(125, y+275, 25);
  square(150, y+275, 25);
  fill(r3, g3, b3);
  square(175, y+275, 25);
  square(200, y+275, 25);
  fill(240, y+275, 227);
  square(225, y+275, 25);
  square(250, y+275, 25);
  fill(r3, g3, b3);
  square(275, y+275, 25);
  
  fill(209, 222, 202);
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
  
  fill(255, 0, 119);
  textSize(14);
  text(quotes[index], 145, (y*0.05)+40, 200, 80);
  if (millis() - timestamp > 10000) {
    index++;
    timestamp = millis();
    if (index > quotes.length - 1) {
      index = 0;
    }
  }
  
  if(y > 40){
		changeDirection = true}
	else if (y <= 25){
		changeDirection = false}
	
	if (y >= 0 && changeDirection === false){
		y += 0.07;
  } else if(changeDirection === true){
		y -= 0.07;
  }
}
