import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Navbar from "./components/Navbar";
import Inventory from "./pages/Inventory";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import AddReview from "./components/AddReview";
import Footer from "./components/Footer";
import RequestedModels from "./pages/RequestedModels";
import { EventProvider } from "./context/EventContext";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
// import Overview from "./docs/Overview";
// import Installation from "./docs/Installation";
// import Features from "./docs/Features";
// import Usage from "./docs/Usage";
// import SupportedDevices from "./docs/SupportedDevices";
// import FAQs from "./docs/FAQs";

function App() {
  return (
    <>
      <BrowserRouter>
        <EventProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex">
              <Sidebar />
              <div className="flex-1 ">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/feedbacks" element={<Feedback />} />
                  <Route path="/store" element={<Inventory />} />
                  <Route path="/add-review" element={<AddReview />} />
                  <Route
                    path="/requested-models"
                    element={<RequestedModels />}
                  />
                  <Route path="/sign-up" element={<Signup />} />
                  <Route path="/sign-in" element={<Signin />} />
                  <Route path="/profile" element={<Profile />} />
                  {/* <Route path="/overview" element={<Overview />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/features" element={<Features />} />
                <Route path="/usage" element={<Usage />} />
                <Route
                path="/supporteddevices"
                element={<SupportedDevices />}
                />
                <Route path="/faqs" element={<FAQs />} /> */}
                </Routes>
                <Footer />
              </div>
            </div>
          </div>
        </EventProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
