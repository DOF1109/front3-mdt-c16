import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contacto from "./components/pages/Contacto";
import Beer from "./components/pages/Beer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<Navbar />} >
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/beer/:id" element={<Beer />} />
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
