import { For, createResource } from "solid-js";
import getPages from "./lib/crawler";

const Pages = () => {
	const [crawledPages] = createResource(window.location.href, () =>
		getPages(location.protocol + "//" + location.host)
	);
	// TODO: Remove current url from list

	return (
		<div class="flex-1 flex flex-col text-black p-4">
			<h4 class="text-xl mb-3">Navigation</h4>
			{crawledPages.loading && (
				<div class="flex-1 flex justify-center items-center">Loading...</div>
			)}
			{crawledPages.error && <div class="flex-1 flex justify-center items-center">Error</div>}
			{crawledPages() && (
				<For each={crawledPages()}>
					{(page) => {
						if (page.url === window.location.href) return;
						return (
							<a
								href={page.url}
								class="flex flex-col p-3 rounded-lg bg-white shadow mb-2 hover:shadow-md transition"
							>
								<span>{page.title}</span>
								<span class="opacity-70 mt-2">{page.desription}</span>
							</a>
						);
					}}
				</For>
			)}
		</div>
	);
};

export default Pages;
