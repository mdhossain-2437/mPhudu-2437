import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import BookingList from "./Components/BookingList/BookingList";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import MainLayout from "./layouts/MainLayout";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";

const fetchWithFallback = async (url) => {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("Failed to fetch data");
		return response.json();
	} catch (error) {
		console.error("Fetch error:", error);
		throw new Error("Failed to load data");
	}
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
				element: <Home />,
      },
      {
        path: "my_booking",
        element: <BookingList />,
				loader: () => fetchWithFallback("/doctors.json"),
				loading: () => <LoadingSpinner />,
      },
      {
        path: "blogs",
				element: <Blogs />,
      },
      {
        path: "contact",
				element: <Contact />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
