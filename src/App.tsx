import "./App.css";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
