import React, { useState } from "react";
import TextHeader from "../TextHeader/TextHeader";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Button from "../Botton/Button";
import toast from "react-hot-toast";
import BarCharts from "../BarChart/BarCharts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BookingList = () => {
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";

	const data = useLoaderData();
	const chartData = JSON.parse(localStorage.getItem("chartData")) || [];
	const bookedDoctorIds =
		JSON.parse(localStorage.getItem("bookedDoctors")) || [];

	const [bookedDoctors, setBookedDoctors] = useState(
		data ? data.filter((doctor) => bookedDoctorIds.includes(doctor.id)) : []
	);

	const handleCancel = (id) => {
		try {
			const updatedIds = bookedDoctorIds.filter((doctorId) => doctorId !== id);
			localStorage.setItem("bookedDoctors", JSON.stringify(updatedIds));
			const updatedChartData = chartData.filter((entry) => entry.id !== id);
			localStorage.setItem("chartData", JSON.stringify(updatedChartData));
			const cancelledDoctor = bookedDoctors.find((doctor) => doctor.id === id);
			toast.success(
				`Appointment removed with ${cancelledDoctor?.name} successfully!`
			);

			setBookedDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
		} catch (error) {
			console.error("Error cancelling appointment:", error);
			toast.error("An error occurred while cancelling the appointment.");
		}
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className="mt-24 mb-20">
			{bookedDoctors.length > 0 && (
				<div className="flex justify-center items-center bg-white mb-10 rounded-2xl shadow-lg border border-gray-200">
					<BarCharts data={chartData} />
				</div>
			)}
			<TextHeader
				title="My Today Appointments"
				description="Our platform connects you with verified, experienced doctors across various specialties — all at your convenience."
			/>
			{bookedDoctors.length === 0 ? (
				<div className="flex flex-col justify-center items-center mb-20">
					<div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col items-center w-full max-w-md border border-gray-100 overflow-hidden relative">
						<div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 -mr-20 -mt-20"></div>
						<div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 -ml-20 -mb-20"></div>

						<div className="bg-blue-50 rounded-full p-5 mb-6 relative z-10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-16 w-16 text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</div>

						<h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center relative z-10">
							No Appointments Yet
						</h3>
						<p className="mb-6 text-gray-600 text-center max-w-xs relative z-10">
							You don't have any appointments scheduled. Book your first
							appointment with our specialists.
						</p>

						<Link
							to="/"
							className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 relative z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 4v16m8-8H4"
								/>
							</svg>
							Book an Appointment
						</Link>
					</div>
				</div>
			) : (
				<div className="flex flex-col gap-6 mt-10">
					{bookedDoctors.map((doctor) => (
						<div
							key={doctor.id}
							className="w-full bg-white rounded-xl border border-gray-200 shadow-md px-6 py-5 flex flex-col gap-2"
						>
							<div className="flex flex-row justify-between items-center mb-2">
								<div className="text-left">
									<p className="text-[#0F0F0F] text-base md:text-lg font-semibold">
										{doctor.name}
									</p>
									<p className="text-xs md:text-sm text-[#0F0F0F99]">
										{doctor.specialities}
									</p>
									<p className="text-xs md:text-sm text-[#0F0F0F99]">
										{doctor.education}
									</p>
								</div>
								<div className="text-right text-[#0F0F0F99] text-xs md:text-sm">
									<p>
										Appointment Fee:{" "}
										<span className="font-semibold text-[#FF6F61]">
											{doctor.consultation_fee} Taka
										</span>{" "}
										+ Vat
									</p>
								</div>
							</div>
							<Button
								label="Cancel Appointment"
								className="w-full mt-2 text-[#FF0000] border border-[#FF0000] bg-transparent hover:bg-[#FF0000] hover:text-white rounded-full py-2 transition-all duration-200 font-medium text-sm md:text-base"
								onClick={() => handleCancel(doctor.id)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default BookingList;
