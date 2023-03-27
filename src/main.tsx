import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

// Find container element for widget
const Container = document.getElementById("widget") as HTMLElement;

// Inject our React App
ReactDOM.createRoot(Container).render(
	<React.StrictMode>
		<App Container={Container} />
	</React.StrictMode>
);
