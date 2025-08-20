import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Treatment from "./components/Treatment/Treatment";
import Procedures from "./components/Procedures/Procedures";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import ContactForm from "./components/ContactForm/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
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
      <Team />
      <ContactForm />
    </main>
    <Footer />
  </>
  );
};

export default App;
