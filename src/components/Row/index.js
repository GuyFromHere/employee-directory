import React from "react";

function Row(props) {
	return (
		<tr>
			<td><img src={props.thumbnail} alt="user"/></td>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.phone}</td>
			<td>{props.cell}</td>
			<td>{props.age}</td>
			<td>{props.state}</td>
		</tr>
	);
}

export default Row;
