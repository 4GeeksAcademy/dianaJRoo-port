import React from "react";
import "../../styles/home.css";
import Home from "../component/applanding_components/Hero";
import Footer from "../component/applanding_components/Footer";
import Navbar from "../component/applanding_components/Navbar";
import Certificado from "../component/applanding_components/Certificado";


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
