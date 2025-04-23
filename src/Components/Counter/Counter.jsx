import React from "react";
import TextHeader from "../TextHeader/TextHeader";

import CounterCard from "./CounterCard";

const Counter = ({ doctors }) => {
	return (
		<div className="py-10">
			<div className="container mx-auto px-4">
				<div className="max-w-xl mx-auto text-center mb-16">
					<h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						We Provide Best Medical Services
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed">
						Our platform connects you with verified, experienced doctors across
						various specialties — all at your convenience.
					</p>
				</div>

				<CounterCard doctors={doctors} />
			</div>
		</div>
	);
};

export default Counter;
