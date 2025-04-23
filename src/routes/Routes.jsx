import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DoctorDetails from "../Components/DoctorDetails/DoctorDetails";
import BookingList from "../Components/BookingList/BookingList";
import Blogs from "../Components/Blogs/Blogs";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const fetchWithFallback = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.error(`Failed to fetch ${url}: ${response.statusText}`);
			throw new Error(`Failed to fetch data (status: ${response.status})`);
		}
		return response.json();
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
};

export const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,

		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				Component: Home,
				loader: () => fetchWithFallback("/doctors.json"),
			},
			{
				path: "/doctorDetails/:id",
				loader: () => fetchWithFallback("/doctors.json"),
				Component: DoctorDetails,
			},
			{
				path: "/my_booking",
				loader: () => fetchWithFallback("/doctors.json"),
				Component: BookingList,
			},
			{
				path: "/blogs",
				Component: Blogs,
			},
		],
	},
]);
