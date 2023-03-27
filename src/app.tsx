import { useState } from "react";
import { FaQuestion, FaTimes } from "react-icons/fa";
import React from "react";

const App = ({ Container }: { Container: HTMLElement }) => {
	const [open, setOpen] = useState(false);
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

	if (!open) {
		return (
			<button
				onClick={() => setOpen(true)}
				className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl"
			>
				<FaQuestion size={22} />
			</button>
		);
	}

	return (
		<div className="fixed bottom-6 right-6 z-50 h-[500px] w-96 overflow-x-hidden overflow-y-scroll rounded-2xl bg-white shadow-2xl">
			<div className="bg-black bg-gradient-to-r from-primary to-primary/80 text-white">
				<div className="flex justify-end p-4">
					<button
						onClick={() => setOpen(false)}
						className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50"
					>
						<FaTimes size={18} />
					</button>
				</div>
				<div className="p-6">
					<h3 className="mb-2 text-lg font-bold">
						Welcome to the CORDS widget
					</h3>
					<p>Here is a quick explanation</p>
				</div>
			</div>
			<div className="p-6">
				<h4 className="text-lg">
					Fully built with React and Vite at{" "}
					<a
						className="text-blue-600 underline"
						href="https://github.com/billyhawkes/widget"
						target="_blank"
						rel="noreferrer"
					>
						REPO
					</a>
					. So far this widget gets data from the users website into
					React. The data below can be used to find similar services
					based on keywords/description.
				</h4>
				<h4 className="mt-8 text-xl font-bold">
					Values to similar search with
				</h4>
				<h4 className="mt-8 mb-2 text-xl">Custom</h4>
				<p className="mb-2">
					User can input custom keywords and description in the html
					or via{" "}
					<a
						className="text-blue-600 underline"
						href="https://github.com/billyhawkes/cords-wp-plugin"
						target="_blank"
						rel="noreferrer"
					>
						wordpress plugin
					</a>
				</p>
				<p>keywords: {keywords}</p>
				<p>description: {description}</p>
				<h4 className="mt-8 mb-2 text-xl">Page meta tags</h4>
				<p className="mb-2">Finds page info from html meta tags</p>
				{metaHeaders.length > 0 ? (
					metaHeaders.map((meta, index) => (
						<p key={index}>
							{meta.name}: {meta.content}
						</p>
					))
				) : (
					<p>No meta tags found</p>
				)}
			</div>
		</div>
	);
};

export default App;
