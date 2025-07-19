import React, { useEffect, useRef, useState } from "react";
import { runSimulation, resetSimulation } from "../ai/geneticAI";

const MazeMind = () => {
  const canvasRef = useRef(null);
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    runSimulation(canvasRef.current, setGeneration);
  }, []);

  const handleReset = () => {
    resetSimulation();
    setGeneration(0);
    runSimulation(canvasRef.current, setGeneration);
  };

  return (
    <div>
      <h1>MazeMind: Genetic AI Maze Solver</h1>
      <canvas ref={canvasRef} width="500" height="500" />
      <div>
        <button onClick={handleReset}>Reset</button>
        <p>Generation: {generation}</p>
      </div>
    </div>
  );
};

export default MazeMind;
