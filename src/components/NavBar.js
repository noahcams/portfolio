import React from "react";
import profPic from "../images/prof-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Portfolio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
