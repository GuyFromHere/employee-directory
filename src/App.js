import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import Employees from "./pages/Employees";
import NavBar from "./components/NavBar";
import Select from "./components/Select";
import UserContext from "./utils/UserContext";

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<UserContext.Provider>
					<Select />
					<Container>
						<Route exact path="/about" component={About} />
						<Route exact path="/employees" component={Employees} />
						<Route exact path="/home" component={Home} />
					</Container>
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default App;
