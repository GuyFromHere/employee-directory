import React from "react";

function Row(props) {
	return (
		<tr>
			<td><img src={props.thumbnail} /></td>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.phone}</td>
			<td>{props.cell}</td>
		</tr>
	);
}

export default Row;
