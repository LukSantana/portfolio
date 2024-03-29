import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from './Components/Navbar/index'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Navbar />
		<App />
	</React.StrictMode>
);
