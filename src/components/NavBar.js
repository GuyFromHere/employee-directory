import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<Link
					to="/home"
					className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
				>
					Home
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/about"
					className={
						window.location.pathname === "/about" ? "nav-link active" : "nav-link"
					}
				>
					About
				</Link>
			</li>
			<li className="nav-item">
				<Link
					to="/employees"
					className={
						window.location.pathname === "/employees" ? "nav-link active" : "nav-link"
					}
				>
					Employees
				</Link>
			</li>
		</ul>
	);
}

export default NavBar;
