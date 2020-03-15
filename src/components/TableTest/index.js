import React, { useContext } from "react";
import SortContext from '../../utils/SortContext';

function Table (props) { 
    const { sort, handleSort } = useContext(SortContext)
    
    const handleHeaderClick = (e) => {  
        const colId = e.target.id;
        const colCurrentSort = e.target.className;
        const colInfo = {
            column: colId,
            direction: colCurrentSort
        }
        console.log('table handleheaderclick - ' + colInfo.column)
        {handleSort(colInfo)};
        console.log('table sort ' + colInfo.column + ' ' + colInfo.direction ) 
    }
        
    return (
        <table align="center">
			<thead>
                <tr>
                    <th>Picture</th>
                    <th id="name" className={sort.direction === "asc" ? "desc" : "asc"} onClick={handleHeaderClick}>Name</th>
                    <th id="email" className={sort.direction === "asc" ? "desc" : "asc"} onClick={handleHeaderClick}>Email</th>
                    <th id="phone" className={sort.direction === "asc" ? "desc" : "asc"} onClick={handleHeaderClick}>Phone</th>
                    <th id="cell" className={sort.direction === "asc" ? "desc" : "asc"} onClick={handleHeaderClick}>Cell</th> 
                </tr>
            </thead>
			<tbody>
            {props.rows}
			</tbody>
		</table>
    )
}

export default Table;