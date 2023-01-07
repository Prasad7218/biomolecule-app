import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aimscope from "./components/aim-scope";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aimscope" element={<Aimscope />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
