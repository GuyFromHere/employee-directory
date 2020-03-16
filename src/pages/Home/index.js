import React, { useState, useEffect, useContext } from "react";
import Row from '../../components/Row';
import TableTest from '../../components/TableTest';
import Select from '../../components/Select';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';
import SortContext from '../../utils/SortContext';
import FilterContext from "../../utils/FilterContext";
import './style.css';

function Home() {
	//const {filterKey, filterValue} = useContext(FilterContext)
	const [filter, setFilter] = useState({});
	const [employees, setEmployees] = useState([]);
	const [sort, setSort] = useState({});
	// test hook to determine why Home is not updating when setFilter runs
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('You clicked ${count} times.');
		console.log('home useEffect');
		if (typeof filterKey === "undefined"){
			console.log('no filter');
			getEmployees();
		} else {
			console.log('filter found: ' + filter.filterKey);
			getEmployeesFilter(filter.filterKey, filter.filterValue);
		}
	}, []);

	const getEmployeesFilter = (filter) => {
		API.getEmployeesFilter(filter).then(res => {
			console.log('home getEmployeesFilter')
			console.log(res.data.results[0])
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
	   setSort({
		   column: dataFromChild.column,
		   direction: dataFromChild.direction
	   })
    }

	const handleFilter = (dataFromChild) => {
		console.log('home handleFilter')
		console.log(dataFromChild);
		setFilter({
			filterKey: dataFromChild.filterKey,
			filterValue: dataFromChild.filterValue
		});
		setCount(count + 1);
		
	}

	const renderTable = (employees) => {
		if (employees.length > 0) {
			let newList = employees.sort(sortFunction).map((item, index) => {
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
					<FilterContext.Provider value={{ filter, handleFilter }}>
						<Select />
					</FilterContext.Provider>
					{renderTable(employees)} 
				</SortContext.Provider>
			</UserContext.Provider>
		</div>
	);
}

export default Home;
