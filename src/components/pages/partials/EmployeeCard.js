import React from "react";

function EmployeeCard(props) {
	return (
		/*  <div className="card">
            <h3>Name: {props.name}</h3>
            <h4>Email: {props.email}</h4>
            <img src={props.thumbnail} alt="A picture of this person">
        </div> */
		<div className="card">
			<div className="img-container">
				<img src={props.thumbnail} />
			</div>
			<div className="content">
				<ul>
					<li>
						<strong>Name:</strong> {props.name}
					</li>
					<li>
						<strong>Email:</strong> {props.email}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default EmployeeCard;
