import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import DoctorsContainer from "../../Components/DoctorsContainer/DoctorsContainer";
import { useLoaderData } from "react-router-dom";
import Counter from "../../Components/Counter/Counter";

const Home = () => {
	const data = useLoaderData();

	const [doctors, setDoctors] = useState(data);

	const handleSearch = (e, text) => {
		e.preventDefault();
		if (text === "") return setDoctors(data);
		const filteredDoctors = data.filter(
			(doctor) =>
				doctor.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
				doctor.specialities
					.toLowerCase()
					.split(" ")
					.includes(text.toLowerCase())
		);
		setDoctors(filteredDoctors);
	};
	return (
		<div>
			<Hero handleSearch={handleSearch}></Hero>
			<DoctorsContainer doctors={doctors} />
			<Counter doctors={doctors} />
		</div>
	);
};

export default Home;
