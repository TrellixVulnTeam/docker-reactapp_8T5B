import "./styles/cards.css";
import './styles/styles.css';
import Cards from "./components/cards";
import FormBox from "./components/form";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about";
import Arrows from "./components/arrows";
import Main from "./components/main";
import Form from "./components/footer"

function App() {
  AOS.init();
  return (
    <div className="App">
    <Main/>
    <Arrows/>
    <About/>
    <Cards/>
    <FormBox/>
    <Form/>
    </div>    
  );
}

export default App;
