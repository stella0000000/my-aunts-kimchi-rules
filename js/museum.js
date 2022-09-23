function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.style("z-index", "-1000");
canvas.elt.style.position = "fixed"; // manually set the style
canvas.style("top", "0");
canvas.style("left", "600");
}

function draw() {
  background(0);
  strokeWeight(3);
  stroke(random(mouseY), random(mouseX), mouseY);
  noFill();
  //HANGARI
  push();
  translate(windowWidth - 200, 250);
  scale(0.3);
  push();
  translate(160,165);
  rotate(-75);
  ellipse(0,0,60,25);
  pop();
  
  push();
  translate(390, 165);
  rotate(75);
  ellipse(0,0,60,25);
  pop();
  
  arc(200, 200, 100, 250, PI/2, 3* PI / 2);
  arc(350, 200, 100, 250, 3* PI / 2, PI/2);
  line(200,325,350,325);
  
  ellipse(275,60,200,30);
  quad(175, 60, 150, 100, 400, 100, 375, 60);
  
  arc(275, 135, 235, 50, 2*PI, PI);
  pop();

  /* NAMAKSHIN*/
  push();
  translate(windowWidth-225,525);
  scale(0.3);
  beginShape();
  vertex(27, 321);
  vertex(25, 344);
  vertex(54, 371);
  vertex(89, 382);
  vertex(120, 390);
  vertex(160, 390);
  vertex(210, 378);
  vertex(246, 352);
  vertex(250, 331);
  vertex(263, 328);
  vertex(278, 340);
  vertex(286, 353);
  vertex(292, 372);
  vertex(293, 378);
  vertex(288, 402);
  vertex(275, 421);
  vertex(252, 439);
  vertex(238, 444);
  vertex(185, 450);
  vertex(162, 447);
  vertex(122, 436);
  vertex(84, 428);
  vertex(65, 427);
  vertex(46, 426);
  vertex(23, 409);
  vertex(15, 392);
  vertex(11, 347);
  vertex(19, 332);
  vertex(25, 324);
  endShape();

  beginShape();
  vertex(27, 320);
  vertex(43, 321);
  vertex(65, 332);
  vertex(82, 342);
  vertex(114, 350);
  vertex(130, 356);
  vertex(153, 360);
  vertex(179, 363);
  vertex(195, 366);
  vertex(227, 366);
  endShape();
  
  beginShape();
  vertex(42, 425);
  vertex(40, 449);
  vertex(39, 469);
  vertex(38, 477);
  vertex(54, 487);
  vertex(64, 488);
  vertex(74, 481);
  vertex(90, 460);
  vertex(97, 451);
  vertex(108, 438);
  vertex(113, 445);
  vertex(119, 454);
  vertex(134, 480);
  vertex(143, 495);
  vertex(155, 503);
  vertex(163, 504);
  vertex(177, 500);
  vertex(183, 496);
  vertex(182, 480);
  vertex(181, 464);
  vertex(181, 452);
  endShape();
  
  beginShape();
  vertex(67, 489);
  vertex(83, 485);
  vertex(98, 477);
  vertex(102, 474);
  vertex(109, 470);
  vertex(118, 454);
  endShape();
  
  beginShape();
  vertex(217, 449);
  vertex(219, 461);
  vertex(218, 466);
  vertex(207, 479);
  vertex(197, 488);
  vertex(185, 498);
  endShape();
  
  /* left foot shoe */
  beginShape();
  vertex(531, 343);
  vertex(480, 345);
  vertex(437, 342);
  vertex(387, 331);
  vertex(356, 322);
  vertex(336, 315);
  vertex(326, 310);
  vertex(321, 308);
  vertex(315, 312);
  vertex(314, 331);
  vertex(321, 342);
  vertex(354, 361);
  vertex(409, 371);
  vertex(457, 374);
  vertex(499, 365);
  vertex(533, 342);
  vertex(541, 330);
  vertex(544, 325);
  vertex(543, 310);
  vertex(559, 310);
  vertex(579, 320);
  vertex(585, 337);
  vertex(589, 367);
  vertex(578, 393);
  vertex(552, 416);
  vertex(512, 430);
  vertex(474, 430);
  vertex(411, 420);
  vertex(372, 413);
  vertex(349, 409);
  vertex(334, 407);
  vertex(315, 396);
  vertex(307, 384);
  vertex(299, 359);
  vertex(303, 332);
  vertex(312, 315);
  endShape();
  
  beginShape();
  vertex(336, 408);
  vertex(332, 422);
  vertex(329, 448);
  vertex(335, 455);
  vertex(350, 459);
  vertex(370, 457);
  vertex(384, 443);
  vertex(395, 434);
  vertex(402, 426);
  vertex(418, 447);
  vertex(430, 464);
  vertex(440, 474);
  vertex(448, 475);
  vertex(457, 477);
  vertex(468, 473);
  vertex(472, 472);
  vertex(474, 465);
  vertex(474, 449);
  vertex(472, 431);
  endShape();
  
  beginShape();
  vertex(474, 469);
  vertex(500, 450);
  vertex(502, 445);
  vertex(504, 439);
  vertex(502, 431);
  endShape();
  pop();

  //HANBOK
  push();
  translate(windowWidth - 200, 350);
  scale(0.2);
  beginShape();
  vertex(352, 497);
  vertex(186, 496);
  vertex(76, 495);
  vertex(42, 499);
  vertex(19, 497);
  vertex(26, 573);
  vertex(29, 695);
  vertex(117, 697);
  vertex(239, 696);
  vertex(270, 701);
  vertex(279, 700);
  vertex(290, 693);
  vertex(293, 687);
  vertex(297, 640);
  vertex(300, 604);
  vertex(324, 580);
  vertex(327, 592);
  endShape();
  
  beginShape();
  vertex(353, 496);
  vertex(371, 466);
  vertex(382, 463);
  vertex(390, 466);
  vertex(412, 498);
  vertex(553, 495);
  vertex(658, 499);
  vertex(712, 500);
  vertex(735, 498);
  vertex(731, 584);
  vertex(732, 698);
  vertex(600, 700);
  vertex(489, 695);
  vertex(479, 692);
  vertex(473, 684);
  vertex(470, 666);
  vertex(465, 600);
  vertex(445, 576);
  vertex(465, 822);
  vertex(399, 835);
  vertex(325, 835);
  vertex(378, 595);
  vertex(409, 497);
  endShape();
  
  beginShape();
  vertex(263, 700);
  vertex(210, 818);
  vertex(170, 925);
  vertex(242, 943);
  vertex(360, 958);
  vertex(523, 941);
  vertex(591, 922);
  vertex(501, 697);
  endShape();
  
  beginShape();
  vertex(352, 496);
  vertex(365, 531);
  vertex(390, 468);
  endShape();
  
  beginShape();
  vertex(363, 478);
  vertex(375, 505);
  endShape();

  beginShape();
  vertex(398, 477);
  vertex(375, 546);
  vertex(364, 537);
  vertex(349, 570);
  vertex(355, 590);
  vertex(324, 724);
  vertex(299, 851);
  vertex(396, 855);
  vertex(484, 838);
  vertex(444, 574);
  endShape();
  
  beginShape();
  vertex(412, 498);
  vertex(377, 589);
  vertex(325, 834);
  vertex(464, 824);
  vertex(445, 575);
  endShape();
  
  beginShape();
  vertex(365, 569);
  vertex(379, 589);
  vertex(350, 601);
  vertex(350, 592);
  vertex(342, 586);
  vertex(366, 570);
  endShape();
  
  beginShape();
  vertex(349, 588);
  vertex(328, 589);
  vertex(320, 610);
  vertex(288, 738);
  vertex(310, 743);
  vertex(337, 613);
  vertex(343, 610);
  vertex(348, 603);
  endShape();

  beginShape();
  vertex(311, 745);
  vertex(311, 786);
  vertex(336, 784);
  vertex(334, 659);
  endShape();
  pop();

  /****HANOK****/
  // TOP
  push();
  translate(windowWidth-225, 100);
  scale(0.3);
  line(100,100,225,100);
  x0 = 100;
  while (x0 <= 200) {
    ellipse(x0, 90, 10, 50);
    x0 = x0+25;
  }
  push();
  translate(225,90)
  rotate(150);
  ellipse(0,0, 10, 50);
  pop();
  rect(80, 65, 150, 10);
  line(225,100, 225, 150);
  
  // MID
  line(225, 185, 430, 185);
  x0 = 230;
  while (x0 <= 405) {
    ellipse(x0, 175, 10, 50);
    x0 = x0+25;
  }
  push();
    translate(430,175)
    rotate(150);
    ellipse(0,0, 10, 50);
  pop();
  rect(225, 150, 200, 10);
  line(430, 185, 430, 250);
  
  // BOTTOM
  line(435,290,610,290);
  x0 = 435;
  while (x0 <= 585) {
    ellipse(x0, 275, 10, 50);
    x0 = x0+25;
  }
  push();
    translate(605,275)
    rotate(150);
    ellipse(0,0, 10, 50);
  pop();
  rect(430, 250, 175, 10);
  line(610, 292, 610, 500);
  pop();
  pop();
}
