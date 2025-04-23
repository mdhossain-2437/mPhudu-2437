import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";

const ErrorPage = ({ errorMessage }) => {
	return (
		<>
			<Navbar />
			<div className="min-h-screen flex flex-col">
				<div className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-200 px-4 relative overflow-hidden">
					<div className="absolute inset-0">
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
						/>
						<motion.div
							animate={{
								scale: [1.2, 1, 1.2],
								rotate: [360, 180, 0],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
						/>
						<motion.div
							animate={{
								scale: [1, 1.2, 1],
								y: [0, -50, 0],
							}}
							transition={{
								duration: 15,
								repeat: Infinity,
								ease: "linear",
							}}
							className="absolute bottom-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"
						/>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl p-4 sm:p-6 md:p-12 lg:p-16 shadow-2xl max-w-2xl w-full mx-4 text-center border border-white/20"
					>
						<motion.div
							initial={{ scale: 0, rotate: -180 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 20,
								delay: 0.2,
							}}
							className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-6 md:mb-8"
						>
							<svg
								className="w-full h-full text-blue-600"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<motion.path
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 2,
										ease: "easeInOut",
										repeat: Infinity,
										repeatType: "reverse",
									}}
									d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
								<motion.path
									initial={{ pathLength: 0 }}
									animate={{ pathLength: 1 }}
									transition={{
										duration: 2,
										ease: "easeInOut",
										repeat: Infinity,
										repeatType: "reverse",
										delay: 0.5,
									}}
									d="M9 9H9.01M15 9H15.01M9.5 15C10.7966 16.2967 13.2034 16.2967 14.5 15"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</motion.div>

						<motion.h1
							className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3, type: "spring" }}
						>
							Oops!
						</motion.h1>

						<motion.p
							className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							{errorMessage ? "Error Encountered" : "Page Not Found"}
						</motion.p>

						<motion.p
							className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-12"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						>
							{errorMessage ||
								"The page you're looking for seems to have wandered off into the digital void."}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								to="/"
								className="inline-block px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white text-sm sm:text-base md:text-lg rounded-full font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:brightness-110"
							>
								Return to Home
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ErrorPage;
