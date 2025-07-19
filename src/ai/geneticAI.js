let population = [];
let generation = 0;
let gridSize = 10;
let cellSize = 50;
let goal = { x: gridSize - 1, y: gridSize - 1 };

class Agent {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.dna = Array.from({ length: 20 }, () => Math.floor(Math.random() * 4));
    this.step = 0;
    this.fitness = 0;
  }

  move() {
    if (this.step >= this.dna.length) return;
    const direction = this.dna[this.step];
    switch (direction) {
      case 0: if (this.y > 0) this.y--; break;        // up
      case 1: if (this.y < gridSize - 1) this.y++; break; // down
      case 2: if (this.x > 0) this.x--; break;        // left
      case 3: if (this.x < gridSize - 1) this.x++; break; // right
    }
    this.step++;
  }

  calculateFitness() {
    const dx = goal.x - this.x;
    const dy = goal.y - this.y;
    this.fitness = 1 / (dx * dx + dy * dy + 1);
  }
}

export function runSimulation(canvas, updateGen) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  population = Array.from({ length: 50 }, () => new Agent());
  generation = 0;

  function drawGrid() {
    ctx.strokeStyle = "#333";
    for (let i = 0; i <= gridSize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, gridSize * cellSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(gridSize * cellSize, i * cellSize);
      ctx.stroke();
    }
    ctx.fillStyle = "#0f0";
    ctx.fillRect(goal.x * cellSize, goal.y * cellSize, cellSize, cellSize);
  }

  function drawAgents() {
    ctx.fillStyle = "#0ff";
    for (const agent of population) {
      ctx.beginPath();
      ctx.arc(
        agent.x * cellSize + cellSize / 2,
        agent.y * cellSize + cellSize / 2,
        5,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }

  function nextGeneration() {
    for (const agent of population) {
      agent.calculateFitness();
    }
    population.sort((a, b) => b.fitness - a.fitness);
    const top = population.slice(0, 10);
    const newPop = [];
    for (let i = 0; i < 50; i++) {
      const parent = top[Math.floor(Math.random() * top.length)];
      const child = new Agent();
      child.dna = parent.dna.map((gene) =>
        Math.random() < 0.1 ? Math.floor(Math.random() * 4) : gene
      );
      newPop.push(child);
    }
    population = newPop;
    generation++;
    updateGen(generation);
  }

  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    for (const agent of population) {
      agent.move();
    }
    drawAgents();
  }

  function loop() {
    step();
    drawAgents();
    setTimeout(() => {
      if (population[0].step >= population[0].dna.length) {
        nextGeneration();
        loop();
      } else {
        loop();
      }
    }, 200);
  }

  loop();
}

export function resetSimulation() {
  population = [];
  generation = 0;
}
