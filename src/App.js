import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import Employees from "./pages/Employees";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Container>
					
					<Route exact path="/about" component={About} />
					<Route exact path="/employees" component={Employees} />
					<Route exact path="/home" component={Home} />
				</Container>
			</div>
		</Router>
	);
}

export default App;
