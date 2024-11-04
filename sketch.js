function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(30);
  noFill();
  strokeWeight(2);

  let numLines = 5; // Número total de linhas
  let numDrawings = 8; // Número de desenhos por linha
  let spacingX = width / (numDrawings + 1); // Distância horizontal para os desenhos
  let spacingY = height / (numLines + 1); // Distância vertical para as linhas

  for (let i = 0; i < numLines; i++) {
    push();
    translate(0, (i + 1) * spacingY); // Desloca verticalmente para cada linha

    for (let j = 0; j < numDrawings; j++) {
      push();
      translate((j + 1) * spacingX, 0); // Desloca horizontalmente para cada desenho
      
      // Define a cor do stroke de forma aleatória
      stroke(random(255), random(255), random(255));
      
      drawLines(random(1, 2), 100, 3);
      pop();
    }

    pop();
  }
}

function drawLines(numLines = 3, side = 100, points = 3) {
  for (let n = 0; n < numLines; n++) {
    drawLine(side, points);
  }
}

function drawLine(side = 100, points = 3) {
  beginShape();
  for (let p = 0; p < points; p++) {
    let x = map(p, 0, points - 1, -side / 2, side / 2);
    let y = random(-side / 2, side / 2);
    vertex(x, y);
  }
  endShape();
}
