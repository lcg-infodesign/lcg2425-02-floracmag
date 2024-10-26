function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);

  noFill();
  blendMode(BURN);

  stroke("tomato");

  for (let i = 0; i < 5; i++) {
    push();
    translate(100 * i, 100);
    drawLines(random(1, 2), 50, 3); // Define o número de pontos como 3
    pop();
  }
}

function drawLines(numLines = 3, side = 50, points = 3) { // Altera o valor padrão de points para 3
  for (let n = 0; n < numLines; n++) {  
    drawLine(side, points);
  }
}

function drawLine(side = 100, points = 3) { // Aqui, define points como 3
  beginShape();

  for (let p = 0; p < points; p++) {
    let x = map(p, 0, points - 1, -side / 2, side / 2); // Gera x de -side/2 a side/2
    let y = random(-side / 2, side / 2); // Gera y aleatório entre -side/2 e side/2

    vertex(x, y);
  }

  endShape();
}


