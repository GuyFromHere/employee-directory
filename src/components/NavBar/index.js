import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
	return (
		<ul>
			<li>
				<Link
					to="/home"
					className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					to="/about"
					className={
						window.location.pathname === "/about" ? "nav-link active" : "nav-link"
					}
				>
					About
				</Link>
			</li>
			<li>
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
