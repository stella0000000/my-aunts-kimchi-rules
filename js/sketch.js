let content = 'My Aunt\'s Kimchi Rules.';
let xStart = 0;
var auntText;

function preload() {
  auntText = loadImage("/images/auntskimchi.png");

}

function windowResized() {
  resizeCanvas(windowWidth, 45);
}

function setup() {
  canvas = createCanvas(windowWidth, 45);
  canvas.style("z-index", "1");
  canvas.elt.style.position = "fixed"; // manually set the style
  canvas.style("bottom", "0");
  canvas.style("left", "0");
  angleMode(DEGREES);
}

function draw() {
  background(255, 0, 119);

  for (let x = xStart; x < width;  x += 500) {
    fill(255);
    image(auntText,x,height-40,300,40);
    //text(content, x, height/1.7); //display text
  }
  xStart--;
}