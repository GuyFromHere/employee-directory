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
			const newArr = res.data.results.map(item=> {
				return {
					name: item.name.first,
					email: item.email,
					thumbnail: item.picture.thumbnail,
					phone: item.phone,
					cell: item.cell
				}
			})
			this.setState({
				results: newArr
			})
			return newArr;
		})
		.catch(err => console.log(err));
	};

	// callback for array sort() prototype. Use to sort object array.
	// hard code to sort on first name for now...
	sortFunction = (a, b) => {
		if (a.name === b.name) {
			return 0;
		} else {
			return a.name < b.name ? -1 : 1;
		}
	}

	renderTable = (results, sort) => {
			if (results.length > 0) {
			let newList = results.sort(this.sortFunction).map((item, index) => {
				return <Row
							key={index}
							name={item.name}
							email={item.email}
							thumbnail={item.thumbnail}
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
