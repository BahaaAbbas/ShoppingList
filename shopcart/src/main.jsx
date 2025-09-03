import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TechStore from "./TechStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TechStore />
  </StrictMode>
);
