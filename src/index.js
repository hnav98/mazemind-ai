import React from "react";
import { createRoot } from "react-dom/client";
import MazeMind from "./components/MazeMind";
import "./style.css";

const root = createRoot(document.getElementById("root"));
root.render(<MazeMind />);
