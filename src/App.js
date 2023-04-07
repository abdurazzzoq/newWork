import "./App.css";
import AboutUs from "./components/About/AboutUs";
import CLient from "./components/Client/CLient";
import Contact from "./components/Contact/Contact";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <Service />
      <AboutUs />
      <Doctors />
      <CLient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
