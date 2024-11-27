import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import Inventory from "./pages/Inventory";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddReview from "./components/AddReview";
import Sidebar from "./components/Sidebar";
import { useState } from "react";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <BrowserRouter>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
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
