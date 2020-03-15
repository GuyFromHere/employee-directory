import React, { useState, useEffect } from "react";
import Row from '../../components/Row'
import TableTest from '../../components/TableTest'
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import SortContext from '../../utils/SortContext';
import './style.css';

function Home() {
	const [employees, setEmployees] = useState([]);
	const [sort, setSort] = useState({});

	useEffect(() => {
		getEmployees();
	}, []);

	const getEmployees = () => { 
		API.getEmployees().then(res => {
			const newArr = res.data.results.map(item=> {
				return {
					name: item.name.first,
					email: item.email,
					thumbnail: item.picture.thumbnail,
					phone: item.phone,
					cell: item.cell,
					location: item.location.state,
					age: item.dob.age
				}
			})
			setEmployees( newArr );
			
		}).catch(err => console.log(err))
	}

	const sortFunction = (a, b) => {
		if (a[sort.column] === b[sort.column]) {
			return 0;
		}
		if ( sort.direction === "asc" ) {
			return a[sort.column] < b[sort.column] ? -1 : 1;
		} else {
			return a[sort.column] > b[sort.column] ? -1 : 1;
		}
	}
	
	// Get new sort state data from th element in child component
	const handleSort = (dataFromChild) => {
		console.log('home click handlesort')
	   setSort({
			   column: dataFromChild.column,
			   direction: dataFromChild.direction
		   })
		console.log(sort.column + ' ' + sort.direction)
    }

	const renderTable = (employees) => {
		if (employees.length > 0) {
			let newList = employees.sort(sortFunction).map((item, index) => {
			//let newList = employees.map((item, index) => {
				return <Row
						key={index}
						name={item.name}
						email={item.email}
						thumbnail={item.thumbnail}
						phone={item.phone}
						cell={item.cell}
				/>
			})
			return (<TableTest 
					handleSort={sort.handleSort}
					dir={sort.dir}
					rows={newList} 
					/>)
		} else {
			return "Sorry, I couldn't find anything.";
		}
	}; 

	return (
		<div>
			<UserContext.Provider value={{ employees }}>
				<SortContext.Provider value={{ sort, handleSort }}>
					<h1>Home</h1>
					{renderTable(employees)} 
				</SortContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default Home;
