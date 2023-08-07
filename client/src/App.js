import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./Pages/Mission";
import Products from "./Pages/Products";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="app-container">
          <Hero className="hero-photo" />
          <Routes>
            <Route path="/mission" element={<Mission />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
