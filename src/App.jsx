import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Temple from "./pages/Temple";
import Visit from "./pages/Visit";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;