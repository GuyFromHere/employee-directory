import React, { Component } from "react";
import API from "../../utils/API";
import Filler from "../../components/Filler";
import Row from "../../components/Row";
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
					<Row
						name={this.state.results[i].name.first}
						email={this.state.results[i].email}
						thumbnail={this.state.results[i].picture.thumbnail}
						phone={this.state.results[i].phone}
						cell={this.state.results[i].cell}
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
				<table align="center">
					<thead>
						<th>Picture</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Cell</th>
					</thead>
					<tbody>
						{this.renderEmployeesList()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Employees;
