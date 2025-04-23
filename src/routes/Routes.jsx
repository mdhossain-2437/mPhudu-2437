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
		if (!response.ok) throw new Error("Failed to fetch data");
		return response;
	} catch (error) {
		console.error("Fetch error:", error);
		return null;
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
				loader: async () => {
					const data = await fetchWithFallback("../doctors.json");
					if (!data) throw new Error("Failed to load data");
					return data;
				},
				loading: LoadingSpinner,
			},
			{
				path: "/doctorDetails/:id",
				loader: async () => {
					const data = await fetchWithFallback("../doctors.json");
					if (!data) throw new Error("Failed to load data");
					return data;
				},
				loading: LoadingSpinner,
				Component: DoctorDetails,
			},

			{
				path: "/my_booking",
				loader: async () => {
					const data = await fetchWithFallback("../doctors.json");
					if (!data) throw new Error("Failed to load data");
					return data;
				},
				loading: LoadingSpinner,
				Component: BookingList,
			},
			{
				path: "/blogs",
				Component: Blogs,
			},
		],
	},
]);
