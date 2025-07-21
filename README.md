MazeMind: Genetic AI Maze Solver

MazeMind is a simulation-based AI game where a population of agents learn to reach a goal through natural selection and mutation. Built with **React**, **JavaScript**, and **HTML Canvas**, this project demonstrates the power of genetic algorithms in a visual and engaging way.


Features

- Agents attempt to reach a target in a 10x10 grid
- Uses a simple **genetic algorithm**:
- Randomized DNA (movement instructions)
- Fitness-based selection
- Mutation to improve future generations
- Live generation counter
- Reset button for fresh simulations
- Canvas-rendered visual grid with animated agent movement

Tech Stack

- **React** (component structure & rendering)
- **JavaScript** (logic & AI simulation)
- **HTML5 Canvas** (visualization)
- **Parcel** (zero-config bundling)

How It Works

Each agent is given a random DNA sequence that tells it how to move (up, down, left, right). Over time:

1. Agents try to reach the bottom-right green cell.
2. The closer they get, the higher their fitness.
3. The top-performing agents reproduce and mutate.
4. Over generations, the agents get better at finding the goal.

You don't control the agents directly, your role is to watch evolution in action.

Installation & Run

```bash
# Clone the repo
git clone https://github.com/hnav98/mazemind-ai.git
cd mazemind-ai

# Install dependencies
npm install

# Run the app
npm start
