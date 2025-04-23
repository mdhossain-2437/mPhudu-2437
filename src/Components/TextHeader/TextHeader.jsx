import React from "react";

const TextHeader = ({ title, description, className }) => {
	return (
		<div className={className}>
			<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#0F0F0F] sm:text-4xl md:mx-auto">
					{title}
				</h2>
				<p className="text-sm text-[#0F0F0F] md:text-lg line-clamp-2">
					{description}
				</p>
			</div>
		</div>
	);
};

export default TextHeader;
