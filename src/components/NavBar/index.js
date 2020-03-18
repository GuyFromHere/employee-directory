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

		</ul>
	);
}

export default NavBar;
