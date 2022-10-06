
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/index'
import Projects from './Components/Projects';
import Skills from './Components/Skills';

import './styles/main.css';

function App() {
  return (
    <div className="flex flex-col gap-14">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
