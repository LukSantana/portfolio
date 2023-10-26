import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import "./styles/main.css";

function App() {
	return (
		<div className="flex flex-col items-center gap-14">
			<About />
			<Skills />
      <Experience/>
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
