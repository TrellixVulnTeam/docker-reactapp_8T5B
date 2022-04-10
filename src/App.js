import "./styles/cards.css";
import './styles/styles.css';
import Cards from "./components/cards";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about";
import Arrows from "./components/arrows";
import Main from "./components/main";
import Sliders from "./components/slider";

function App() {
  AOS.init();
  return (
    <div className="App">
    <Main/>
    <Arrows/>
    <About/>
    <Cards/>
    <Sliders/>    
    <Footer/>
    </div>    
  );
}

export default App;
