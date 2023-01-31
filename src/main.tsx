import { render } from "preact";
import { App } from "./app";
import "./index.css";

// Find container element for widget
const Container = document.getElementById("widget") as HTMLElement;

// Inject our React App
render(<App Container={Container} />, Container);
