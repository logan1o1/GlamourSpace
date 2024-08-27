import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Docks from "./pages/Docks";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import Inventory from "./pages/Inventory";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/docs" element={<Docks />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/store" element={<Inventory />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
