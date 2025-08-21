import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Treatment from "./components/Treatment/Treatment";
import Procedures from "./components/Procedures/Procedures";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import Team from "./components/Team/Team";
import Appointment from "./components/Appointment/Appointment";


import Login from "./pages/Login"; 
import Dashboard from "./pages/admin/Dashboard";

const FrontPage = () => {
  return (
    <>
      <Header />
      <main>
        <img id="spapng" src="public/images/spa.png" alt="Spa Logo" />
        <Hero />
        <img id="leafpng" src="public/images/leaf.png" alt="Leaf Png" />
        <img id="chinarose" src="public/images/china-rose.png" alt="China Rose" />
        <img id="jasmine" src="public/images/jasmine.png" alt="Jasmine" />
        <About />
        <Treatment />
        <Procedures />
        <TestimonialSlider />
        <Team />
        <Appointment />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
