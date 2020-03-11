import React, { Component } from "react";
import API from "../../utils/API";
import Filler from "./partials/Filler";
import EmployeeCard from "./partials/EmployeeCard";
import "./style.css";

class Employees extends Component {
	state = {
		results: {}
	};

	componentDidMount() {
		this.getEmployees();
	}

	getEmployees = () => {
		API.getEmployees()
			.then(res => {
				this.setState({
					results: res.data.results
				});
			})
			.catch(err => console.log(err));
	};

	renderEmployeesList = () => {
		if (this.state.results.length > 0) {
			console.log("employee.js renderEmployeesList");
			console.log(this.state.results);
			let newList = [];
			for (let i = 0; i < this.state.results.length; i++) {
				newList.push(
					<EmployeeCard
						name={this.state.results[i].name.first}
						email={this.state.results[i].email}
						thumbnail={this.state.results[i].picture.thumbnail}
					/>
				);
			}
			return newList;
		} else {
			return <Filler />;
		}
	};

	render() {
		return (
			<div>
				<h1>Employee List</h1>
				{this.renderEmployeesList()}
			</div>
		);
	}
}

export default Employees;
