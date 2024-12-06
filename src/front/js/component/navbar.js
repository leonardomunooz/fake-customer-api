import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	
	const handleClose = () => {
		actions.logout()
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">

				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-danger" onClick={handleClose}>cerrar session</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
