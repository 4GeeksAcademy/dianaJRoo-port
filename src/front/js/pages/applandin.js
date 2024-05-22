import React from "react";
import "../../styles/home.css";
import Navbar from "../component/Navbar";
import Certificado from "../component/Certificado";
import Home from "../component/Home";
import Footer from "../component/Footer";




export const AppLanding = () => {

	return (
		<>
			<Navbar />
			<Home />
			<Certificado />
			<Footer />
		</>
	);
};
