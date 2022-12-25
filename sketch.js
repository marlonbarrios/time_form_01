const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()

let half;
let hoursSize;
let minutesSize;
let secondsSize;

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: true,
  dimensions: [1024, 1024],
  bleed: 1 / 8,
};

canvasSketch(() => {
  angleMode(DEGREES);
 
  noCursor();
  return ({
    playhead,
    width,
    height
  }) => {
     background(255, 5);
   
  translate(width/2, height/2);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();


  noStroke();


  strokeWeight(secondsSize * 0.15) ;
  stroke(0,3);
  noFill();
  secondsSize = width * 0.85
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, secondsSize, secondsSize, -secondAngle , 0 );
  stroke(0, 3);
  arc(0, 0, secondsSize, secondsSize, 0, secondAngle  );
 

  strokeWeight(minutesSize * 0.09);
  stroke(120);
  minutesSize = width * 0.60
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, minutesSize, minutesSize, 0, minuteAngle);


  strokeWeight(hoursSize * 0.25) ;
  stroke(10);
  hoursSize = width * 0.40
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, hoursSize, hoursSize, 0, hourAngle);
  

   stroke(0);
   fill(0)
   noStroke();
   textAlign(CENTER);
  textSize(width * 0.03);
let colorAmPm = map(hr, 0, 24, 255, 0);
rotate(90);
let posAmPm = map(hr, 0, 24, -200, 200);

   if (hr > 12) {
   
    fill(colorAmPm);
    ellipse(posAmPm, 0, width * 0.1, width * 0.1);
  
  } else {
   
   fill(colorAmPm)
    ellipse(posAmPm, 0, width * 0.1, width * 0.1);
  }

  hourAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hourAngle);
  text(half, 0, 0);
  pop()
 
  }
}, settings);
