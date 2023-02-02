import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	console.log(useContext(Context));
	const {store}=useContext(Context)


	return(
	<div className="text-center mt-5">
		<h1>Hello {store.color}!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
)};
