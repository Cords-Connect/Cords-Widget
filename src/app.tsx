const App = ({ Container }: { Container: HTMLElement }) => {
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

	return (
		<div className="p-8 border-[2px] border-[#ccc] m-4 rounded-xl">
			<h1 className="text-3xl mb-4">Widget Test</h1>
			<h1 className="text-lg">
				Fully built with React and Vite at{" "}
				<a
					className="text-blue-600 underline"
					href="https://github.com/billyhawkes/widget"
					target="_blank"
				>
					REPO
				</a>
				. So far this widget gets data from the users website into React. The data below can
				be used to find similar services based on keywords/description.
			</h1>
			<h2 className="text-lg mb-2 my-4">
				Custom values: User can input custom keywords and description in the html or via{" "}
				<a
					className="text-blue-600 underline"
					href="https://github.com/billyhawkes/cords-wp-plugin"
					target="_blank"
				>
					wordpress plugin
				</a>
			</h2>
			<h2>keywords: {keywords}</h2>
			<h2>description: {description}</h2>
			<h2 className="text-lg mb-2 my-4">
				Meta tags: finds description and keywords from meta
			</h2>
			{metaHeaders.length > 0 ? (
				metaHeaders.map((meta) => (
					<p>
						{meta.name}: {meta.content}
					</p>
				))
			) : (
				<p>No meta tags found</p>
			)}
			<div id="widget" data-keywords="" data-description="test"></div>
			<script src="https://billyhawkes.github.io/widget/dist/widget.js"></script>
		</div>
	);
};

export default App;
