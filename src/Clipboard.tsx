import { For } from "solid-js";
import ServiceItem from "./ServiceItem";
import { clipboardServices } from "./lib/clipboard";

const Clipboard = () => {
	if (clipboardServices().length === 0) {
		return <div class="p-3 text-black bg-slate-100">Empty</div>;
	}

	return (
		<div class="p-3 text-black bg-slate-100">
			{clipboardServices.loading && (
				<div class="flex-1 flex justify-center items-center">Loading...</div>
			)}
			{clipboardServices.error && (
				<div class="flex-1 flex justify-center items-center">Error</div>
			)}
			{clipboardServices() && (
				<For each={clipboardServices()}>
					{(service) => (
						<ServiceItem
							id={service.id}
							name={service.name.en}
							description={service.description.en}
						/>
					)}
				</For>
			)}
		</div>
	);
};

export default Clipboard;
