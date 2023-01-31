import { useState } from "preact/hooks";
import "./app.css";

export function App({ Container }: { Container: HTMLElement }) {
	const [count, setCount] = useState(0);

	const keywords = Container.getAttribute("data-keywords");
	const name = Container.getAttribute("data-name");

	return (
		<>
			<h1>Widget Test</h1>
			<h2>Site name: {name}</h2>
			<h2>Site keywords: {keywords}</h2>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}
