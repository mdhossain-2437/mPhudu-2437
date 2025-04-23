// components/Button.jsx or Button.js
import React from "react";

const Button = ({ label, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${className}`}
		>
			{label}
		</button>
	);
};

export default Button;
