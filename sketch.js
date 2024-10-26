function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  noFill();
  stroke("black");
  strokeWeight(1);

  let numDrawings = 5; // Número total de desenhos
  let spacing = width / (numDrawings + 1); // Ajusta a distância para que caiba na tela
  let totalWidth = (numDrawings - 1) * spacing; // Largura total ocupada pelos desenhos

  // Centraliza o grupo de desenhos na tela
  translate((width - totalWidth) / 2, height / 2);

  for (let i = 0; i < numDrawings; i++) {
    push();
    translate(i * spacing, 0); // Desloca horizontalmente para cada desenho
    drawLines(random(1, 2), 100, 3);
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



