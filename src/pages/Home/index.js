import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';

class Home extends Component {
	state = {
		employees: [],
		sort: {
			col: "name",
			dir: "asc"
		}
	}

	componentDidMount() {
		this.getEmployees();
	}

	getEmployees = () => {
		API.getEmployees()
			.then(res => {	
				console.log(res.data.results)			
				const newArr = res.data.results.map( (item, index) => {
						return {
							key: index,
							name: item.name.first,
							email: item.email,
							thumbnail: item.picture.thumbnail,
							phone: item.phone,
							cell: item.cell
						}
					})
					this.setState({
						employees: newArr
					})
					return newArr;
			})
			.catch(err => console.log(err));
	}


	handleEmployeeSort = () => {
        console.log('text TableRender')
        console.log(this.sortRef.id)
    }

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

	render() {
		const employees = this.state.employees;
		console.log(this.state.employees)
		return (
			<div>
				<h1>Home</h1>
				<table>
					<thead>
						<tr>
							<th>Picture</th>
							<th onClick={this.handleEmployeeSort} id="first" ref={ref => { this.sortRef = ref; }}>Name</th>
							<th onClick={this.handleEmployeeSort} id="email" ref={ref => { this.sortRef = ref; }}>Email</th>
							<th onClick={this.handleEmployeeSort} id="phone" ref={ref => { this.sortRef = ref; }}>Phone</th>
							<th onClick={this.handleEmployeeSort} id="cell" ref={ref => { this.sortRef = ref; }}>Cell</th>
						</tr>
					</thead>
					<tbody>
						{employees.sort(this.sortFunction).map(item => {
							return (
								<tr id={item.key}>
									<td><img src={item.thumbnail} alt="user"></img> </td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>{item.cell}</td>
								</tr>)
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Home;
