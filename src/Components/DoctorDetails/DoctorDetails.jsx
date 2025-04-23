import React from "react";
import TextHeader from "../TextHeader/TextHeader";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "../Botton/Button";
import toast from "react-hot-toast";
import { TbCircleLetterR } from "react-icons/tb";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const DoctorDetails = () => {
	const navigate = useNavigate();
	const data = useLoaderData();
	const { id } = useParams();

	const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));

	if (!singleDoctor) {
		return <ErrorPage errorMessage={`Doctor with ID ${id} not found.`} />;
	}

	const {
		name,
		image,
		specialities,
		workplace,
		education,
		registration_number,
		availability,
		consultation_fee,
	} = singleDoctor;

	const handleBooking = () => {
		try {
			if (!isAvailableToday) {
				toast.error(`Dr. ${name} is not available today`);
				return;
			}

			const bookedDoctors =
				JSON.parse(localStorage.getItem("bookedDoctors")) || [];

			if (bookedDoctors.includes(parseInt(id))) {
				toast.error(`You already have a booking with Dr. ${name}`);
				return;
			}

			bookedDoctors.push(parseInt(id));
			localStorage.setItem("bookedDoctors", JSON.stringify(bookedDoctors));

			const chartData = JSON.parse(localStorage.getItem("chartData")) || [];
			const existingEntry = chartData.find((entry) => entry.name === name);

			if (existingEntry) {
				existingEntry.consultation_fee = parseInt(consultation_fee);
			} else {
				chartData.push({
					id: parseInt(id),
					name: name,
					consultation_fee: parseInt(consultation_fee),
				});
			}

			localStorage.setItem("chartData", JSON.stringify(chartData));
			toast.success(`Appointment scheduled with Dr. ${name} successfully!`);
			navigate(`/my_booking`);
		} catch (error) {
			console.error("Booking error:", error);
			toast.error(
				"An error occurred while booking the appointment. Please try again."
			);
		}
	};

	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const today = daysOfWeek[new Date().getDay()];
	const isAvailableToday = availability.includes(today);

	return (
		<div className="mt-20 mb-20">
			<div className="bg-white rounded-2xl shadow px-6 py-10 mb-10 max-w-5xl mx-auto">
				<h2 className="text-2xl text-gray-600 md:text-3xl font-bold text-center mb-2">
					Doctor's Profile Details
				</h2>
				<p className="text-gray-500 text-center max-w-2xl mx-auto">
					Our platform connects you with verified, experienced doctors across
					various specialities — all at your convenience..
				</p>
			</div>
			<div className="flex flex-col md:flex-row bg-white rounded-2xl shadow max-w-5xl mx-auto overflow-hidden">
				<div className="flex-shrink-0 flex items-center justify-center bg-[#EAF1FB] md:w-1/3 p-8">
					<img
						src={image}
						alt={name}
						className="rounded-xl w-56 h-64 object-cover border-4 border-white shadow"
					/>
				</div>
				<div className="flex-1 p-8 flex flex-col justify-center">
					<h3 className="text-2xl text-gray-600 font-bold mb-1">Dr. {name}</h3>
					<div className="text-gray-700 font-medium mb-2">{education}</div>
					<div className="text-gray-500 mb-2">{specialities}</div>
					<div className="mb-2">
						<span className="font-semibold text-gray-700">Working at </span>
						<span className="font-medium text-black">{workplace}</span>
					</div>
					<div className="flex items-center gap-2 mb-2 text-gray-600">
						<TbCircleLetterR className="text-blue-600" size={20} />
						<span className="text-sm">Reg No: {registration_number}</span>
					</div>
					<div className="flex flex-wrap gap-2 mb-2 items-center">
						<span className="font-semibold text-gray-700">Availability:</span>
						{availability.map((day, idx) => (
							<span
								key={idx}
								className="px-3 py-1 bg-[#FFA0001A] text-[#FFA000] rounded-full text-xs font-semibold"
							>
								{day}
							</span>
						))}
					</div>
					<div className="flex items-center gap-2 mt-2">
						<span className="font-semibold text-gray-700">
							Consultation Fee:
						</span>
						<span className="text-blue-700 font-bold">
							Taka <strong>৳</strong>
							{consultation_fee}{" "}
							<span className="text-xs font-normal text-gray-400">
								(incl. Vat) Per consultation
							</span>
						</span>
					</div>
				</div>
			</div>
			<div className="bg-white rounded-2xl shadow max-w-5xl mx-auto mt-10 p-8">
				<h4 className="text-xl text-gray-600 font-bold text-center mb-6">
					Book an Appointment
				</h4>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
					<span className="text-gray-700 font-medium">Availability</span>
					<span
						className={`px-4 py-1 rounded-2xl text-sm font-semibold ${
							isAvailableToday
								? "bg-[#09982F1A] text-[#09982F]"
								: "bg-red-100 text-red-600"
						}`}
					>
						{isAvailableToday
							? "Doctor Available Today"
							: "Doctor Not Available Today"}
					</span>
				</div>
				<div className="flex items-center gap-2 mb-4">
					<TbCircleLetterR size={18} className="text-[#FFA000]" />
					<span className="text-[#FFA000] text-sm">
						Due to high patient volume, we are currently accepting appointments
						for today only. We appreciate your understanding and cooperation.
					</span>
				</div>
				<Button
					onClick={handleBooking}
					label="Book Appointment Now"
					className={`w-full mt-2 text-lg font-semibold rounded-full py-3 ${
						!isAvailableToday
							? "bg-gray-400 cursor-not-allowed text-white"
							: "bg-blue-600 hover:bg-blue-700 text-white"
					}`}
					disabled={!isAvailableToday}
				/>
			</div>
		</div>
	);
};

export default DoctorDetails;
