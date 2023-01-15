import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Agroscience from "./components/Agroscience";
import Getintouch from "./components/Getintouch";
import Newsandupdates from "./components/Newsandupdates";
import Enewsletter from "./components/Enewsletter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Aboutus />} />
          <Route exact path="/services" element={<Services />} />

          <Route exact path="agroscience" element={<Agroscience />} />

          <Route exact path="/getintouch" element={<Getintouch />} />

          <Route exact path="/newsletter" element={<Enewsletter />} />

          <Route exact path="/newsupdates" element={<Newsandupdates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
