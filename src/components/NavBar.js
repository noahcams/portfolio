import React from "react";
import profPic from "../images/prof-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img className="profImage" src={profPic} alt="profile picture" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/portfolio">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
