import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import EmployeeList from "./pages/EmployeeList";
import NavBar from "./NavBar";
import API from "../utils/API";

class EmployeeContainer extends Component {
	state = {
		search: "",
		results: []
	};

	// When this component mounts, search the Giphy API for pictures of kittens
	componentDidMount() {
		this.getEmployees();
	}

	getEmployees = query => {
		API.getEmployees(query)
			.then(res => this.setState({ results: res.data.data }))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

	// When the form is submitted, search the Giphy API for `this.state.search`
	handleFormSubmit = event => {
		event.preventDefault();
		//this.searchEmployees(this.state.search);
	};

	render() {
		return (
			<div>
				<Router>
					<div>
						<NavBar />
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/demo" component={EmployeeList} />
					</div>
				</Router>
				{/* <EmployeeList results={this.state.results} /> */}
			</div>
		);
	}
}

export default EmployeeContainer;
