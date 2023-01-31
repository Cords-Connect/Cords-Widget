import { useState } from "preact/hooks";
import "./app.css";

export function App({ Container }: { Container: HTMLElement }) {
	const keywords = Container.getAttribute("data-keywords");
	const description = Container.getAttribute("data-description");

	const metaTags = document.getElementsByTagName("meta");

	const metaHeaders: { name: string; content: string }[] = [];

	for (const tag of metaTags) {
		const name = tag.getAttribute("name");
		const content = tag.getAttribute("content");

		if ((name === "keywords" || name === "description") && content) {
			metaHeaders.push({ name, content });
		}
	}

	console.log(metaHeaders);

	return (
		<>
			<h1>Widget Test</h1>
			<h2>Custom keywords: {keywords}</h2>
			<h2>Custom description: {description}</h2>
			{metaHeaders.map((meta) => (
				<h2>
					Meta {meta.name}: {meta.content}
				</h2>
			))}
		</>
	);
}
