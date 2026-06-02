
import { BrowserRouter, Routes, Route, Link, HashRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
function App() {
  return (
      <HashRouter>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/gallery">Gallery</Link>
          </nav>

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
          </Routes>

      </HashRouter>
  );
}

export default App;
