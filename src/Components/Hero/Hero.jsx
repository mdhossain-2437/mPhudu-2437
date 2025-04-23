import React, { useState } from "react";
import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner img 2.jpg";
import TextHeader from "../TextHeader/TextHeader";

const Hero = ({ handleSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="mt-24 mb-16 px-4 py-6 w-full mx-auto bg-gradient-to-r from-blue-50 to-indigo-50  border-8 border-transparent sm:max-w-xl md:max-w-full lg:max-w-screen-xl shadow-xl md:px-24 lg:px-8 lg:py-8 rounded-3xl relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
					Dependable Care, Backed by Trusted Professionals.
				</h1>
				<p className="text-lg text-gray-600 leading-relaxed">
					Our platform connects you with verified, experienced doctors across
					various specialties — all at your convenience. Whether it's a routine
					checkup or urgent consultation, book appointments in minutes and
					receive quality care you can trust.
				</p>
			</div>

			<div className="max-w-2xl mx-auto mb-8">
				<form
					onSubmit={(e) => {
						handleSearch(e, searchTerm);
						setSearchTerm("");
					}}
					className="flex flex-col md:flex-row justify-center items-center gap-4"
				>
					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full md:w-2/3 h-12 px-6 rounded-full border border-blue-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all placeholder-gray-400 text-black"
						type="text"
						placeholder="Search any doctor..."
					/>
					<button
						type="submit"
						className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
					>
						Search Now
					</button>
				</form>
			</div>

			<div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 mx-auto">
				<div className="relative transform hover:scale-[1.02] transition-transform duration-300">
					<img
						className="w-full h-[250px] object-cover rounded-2xl shadow-xl"
						src={bannerImg1}
						alt="Doctor with patient"
					/>
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
				</div>
				<div className="relative transform hover:scale-[1.02] transition-transform duration-300">
					<img
						className="w-full h-[250px] object-cover rounded-2xl shadow-xl"
						src={bannerImg2}
						alt="Medical consultation"
					/>
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
				</div>
			</div>

			<div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
			<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
			<div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
		</div>
	);
};

export default Hero;
