import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Whatido from './Components/Whatido';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Copyrights from './Components/Copyrights';

function App() {
  return (
    <div>
      <div className="container">
        <Header/>
        <Hero/>
        <Whatido/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
        <Copyrights/>
      </div>
    </div>
  );
}

export default App;
