import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Employees from "./components/pages/Employees";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/employees" component={Employees} />
			</div>
		</Router>
	);
}

export default App;
