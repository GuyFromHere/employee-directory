import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import UserContext from "./utils/UserContext";

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<UserContext.Provider>
					<Container>
						<Route exact path="/home" component={Home} />
						<Route exact path="/" component={Home} />
					</Container>
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default App;
