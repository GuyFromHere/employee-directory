import React from "react";


function Table(props){
        return (
            <table align="center">
				<thead>
                    <tr>
                        <th>Picture</th>
                        <th onClick={props.handleEmployeeSort}>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Cell</th>
                    </tr>
                </thead>
				<tbody>
                {props.rows}
				</tbody>
			</table>
        )
    }
export default Table;