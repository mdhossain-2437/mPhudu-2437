import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import React from "react";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
		<Toaster position="bottom-right" />
	</StrictMode>
);
