import React, { Component } from "react";
import API from "../../utils/API";
import Row from "../../components/Row";
import Table from "../../components/Table"
import "./style.css";
import TableRender from "../../components/TableRender";

class Employees extends Component {
	state = {
		results: {},
		sort: "name"
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

	// callback for array sort() prototype. Use to sort object array.
	// hard code to sort on first name for now...
	sortFunction = (a, b) => {
		if (a.name.first === b.name.first) {
			return 0;
		} else {
			return a.name.first < b.name.first ? -1 : 1;
		}
	}

	renderTable = (results, sort) => {
			if (results.length > 0) {
			console.log("employee.js renderTable results");
			console.log(results);
			let newList = results.sort(this.sortFunction).map((item, index) => {
				return <Row
							key={index}
							name={item.name.first}
							email={item.email}
							thumbnail={item.picture.thumbnail}
							phone={item.phone}
							cell={item.cell}
						/>
			})
			return <Table rows={newList} />
		} else {
			return "Sorry, I couldn't find anything.";
		}
	};

	render() {
		return (
			<div>
				<h1>Employee List</h1>
				{this.renderTable(this.state.results, this.state.sort)}
				<TableRender employees={this.state.results} />
			</div>
		);
	}
}

export default Employees;
