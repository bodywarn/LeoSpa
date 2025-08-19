import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Procedures from "./components/Procedures/Procedures";
import Testimonials from "./components/Testimonials/Testimonials";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/Contact";
import Footer from "./components/Footer/Footer";
z
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Procedures />
      <Testimonials />
      <Team />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
