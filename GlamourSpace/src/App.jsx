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
import Installation from "./docs/Installation";
import Overview from "./docs/Overview";
import Usage from "./docs/Usage";
import Features from "./docs/Features";
import SupportedDevices from "./docs/SupportedDevices";
import FAQs from "./docs/FAQs";
import Footer from "./components/Footer";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        <Route path="/instalation" element={<Installation />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/usages" element={<Usage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/supportedDevices" element={<SupportedDevices />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
