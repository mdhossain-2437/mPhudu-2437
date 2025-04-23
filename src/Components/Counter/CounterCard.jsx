import React, { useEffect, useRef, useState } from "react";
import counterImg from "../../assets/success-doctor.png";
import counterImg1 from "../../assets/success-patients.png";
import counterImg2 from "../../assets/success-review.png";
import counterImg3 from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const CounterCard = ({ doctors }) => {
	const [isVisible, setIsVisible] = useState(false);
	const counterRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.1 }
		);

		if (counterRef.current) {
			observer.observe(counterRef.current);
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current);
			}
		};
	}, []);

	const total_patients = doctors.reduce(
		(acc, doctor) => acc + doctor.total_patients,
		0
	);
	const total_reviews = doctors.reduce(
		(acc, doctor) => acc + doctor.total_reviews,
		0
	);
	const total_staff = doctors.reduce(
		(acc, doctor) => acc + doctor.total_staff,
		0
	);
	const total_doctors = doctors.length;
	return (
		<div
			ref={counterRef}
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
		>
			<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300">
				<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
					<img
						src={counterImg}
						alt="Total Doctors"
						className="w-16 h-16 mx-auto"
					/>
				</div>
				<p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
					{isVisible && <CountUp end={199} duration={2} suffix="+" />}
				</p>
				<h3 className="text-lg font-semibold text-gray-800">Total Doctors</h3>
			</div>

			<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300">
				<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
					<img
						src={counterImg1}
						alt="Total Patients"
						className="w-16 h-16 mx-auto"
					/>
				</div>
				<p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
					{isVisible && <CountUp end={1900} duration={2} suffix="+" />}
				</p>
				<h3 className="text-lg font-semibold text-gray-800">Total Patients</h3>
			</div>

			<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300">
				<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
					<img
						src={counterImg2}
						alt="Total Reviews"
						className="w-16 h-16 mx-auto"
					/>
				</div>
				<p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
					{isVisible && <CountUp end={467} duration={2} suffix="+" />}
				</p>
				<h3 className="text-lg font-semibold text-gray-800">Total Reviews</h3>
			</div>

			<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300">
				<div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 mb-6">
					<img
						src={counterImg3}
						alt="Total Staff"
						className="w-16 h-16 mx-auto"
					/>
				</div>
				<p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3">
					{isVisible && <CountUp end={300} duration={2} suffix="+" />}
				</p>
				<h3 className="text-lg font-semibold text-gray-800">Total Staff</h3>
			</div>
		</div>
	);
};

export default CounterCard;
