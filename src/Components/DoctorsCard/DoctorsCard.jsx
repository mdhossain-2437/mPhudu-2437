import React from "react";
import { TbCircleLetterR } from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "../Botton/Button";

const DoctorsCard = ({ doctor }) => {
	const {
		image,
		registration_number,
		name,
		education,
		experience,
		Available,
		id,
	} = doctor;
	return (
		<div className="group">
			<div className="card bg-white w-full rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
				<figure className="px-6 pt-6">
					<img
						src={image}
						alt={name}
						className="rounded-xl w-full h-[280px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
					/>
				</figure>

				<div className="card-body p-6">
					<div className="flex gap-3 flex-wrap">
						<span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-green-500/10 to-green-600/10 text-green-600 rounded-full">
							{Available}
						</span>
						<span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-600 rounded-full">
							{experience} Experience
						</span>
					</div>

					<div className="mt-4">
						<h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
						<p className="text-gray-600">{education}</p>

						<div className="h-px bg-gray-100 my-4"></div>

						<div className="flex items-center gap-2 text-gray-600 mb-6">
							<TbCircleLetterR className="text-blue-600" size={20} />
							<p className="text-sm">Registration No: {registration_number}</p>
						</div>
					</div>

					<div className="card-actions">
						<Link to={`doctorDetails/${id}`} className="w-full">
							<Button
								label="View Details"
								className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorsCard;
