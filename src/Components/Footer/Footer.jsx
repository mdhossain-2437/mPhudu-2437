import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-white pt-8 pb-4">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center mb-4">
					<img src={logo} alt="Phudu Logo" className="w-12 h-12 mb-4" />
					<h2 className="text-2xl font-bold text-[#0360D9] mb-1">Phudu</h2>
				</div>

				<nav className="max-w-xl mx-auto mb-4">
					<ul className="flex flex-wrap justify-center gap-6 text-gray-500">
						<li>
							<Link
								to="/"
								className="hover:text-blue-600 transition-colors font-medium"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/my_booking"
								className="hover:text-blue-600 transition-colors font-medium"
							>
								My Bookings
							</Link>
						</li>
						<li>
							<Link
								to="/blogs"
								className="hover:text-blue-600 transition-colors font-medium"
							>
								Blogs
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="hover:text-blue-600 transition-colors font-medium"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</nav>

				<div className="flex justify-center gap-4 mb-4">
					<a
						href="https://x.com/mdhossain2437"
						target="_blank"
						rel="noopener noreferrer"
						className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0360D9] text-white hover:bg-[#0248A6] transition-all"
					>
						<FaTwitter className="w-5 h-5" />
					</a>
					<a
						href="https://linkedin.com/mdhossain2437"
						target="_blank"
						rel="noopener noreferrer"
						className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0360D9] text-white hover:bg-[#0248A6] transition-all"
					>
						<FaLinkedin className="w-5 h-5" />
					</a>
					<a
						href="https://github.com/mdhossain-2437"
						target="_blank"
						rel="noopener noreferrer"
						className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0360D9] text-white hover:bg-[#0248A6] transition-all"
					>
						<FaGithub className="w-5 h-5" />
					</a>
				</div>

				<div className="text-center text-gray-400">
					<p className="text-sm">
						© {new Date().getFullYear()} Phudu. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
