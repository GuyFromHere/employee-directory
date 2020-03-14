import React, { Component } from "react";
import API from "../../utils/API";
import Row from "../../components/Row";
import Table from "../../components/Table"
import "./style.css";

class Employees extends Component {
	state = {
		results: {},
		sort: {
			col: "name",
			dir: "asc"
		}
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
	// set state in click function and get col and dir from there
	sortFunction = (a, b) => {
		if ( this.state.sort.col === "name" )  {
			if ( this.state.sort.dir === "asc" ) {
				if (a.name === b.name) {
					return 0;
				} else {
					return a.name < b.name ? -1 : 1;
				}
			} else if ( this.state.sort.dir === "desc" ) {
				if (a.name === b.name) {
					return 0;
				} else {
					return a.name > b.name ? -1 : 1;
				}
			}
		}
		if ( this.state.sort.col === "email" )  {
			if ( this.state.sort.dir === "asc" ) {
				if (a.email === b.email) {
					return 0;
				} else {
					return a.email < b.email ? -1 : 1;
				}
			} else if ( this.state.sort.dir === "desc" ) {
				if (a.email === b.email) {
					return 0;
				} else {
					return a.email > b.email ? -1 : 1;
				}
			}
		}
		
	}
	
	//
	handleSort = (dataFromChild) => {
	   this.setState({
		   sort: {
			   col: dataFromChild.col,
			   dir: dataFromChild.dir
		   }
	   })

    }

	renderTable = (results) => {
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
			return <Table handleSort={this.handleSort} dir={this.state.sort.dir} rows={newList} />
		} else {
			return "Sorry, I couldn't find anything.";
		}
	};

	render() {
		return (
			<div>
				<h1>Employee List</h1>
				{this.renderTable(this.state.results)}
			</div>
		);
	}
}

export default Employees;
