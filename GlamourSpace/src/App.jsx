import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import Inventory from "./pages/Inventory";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddReview from "./components/AddReview";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedbacks" element={<Feedback />} />
        <Route path="/store" element={<Inventory />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
