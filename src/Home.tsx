import { Component, For, createResource } from "solid-js";
import ServiceItem from "./ServiceItem";
import { ServiceSchema } from "./service";

type Props = {
	id: string;
};

const Home: Component<Props> = (props) => {
	const fetchService = async (id: string) => {
		const response = await fetch(`https://api.cords.ai/resource/${id}`);
		const data = await response.json();
		const service = ServiceSchema.parse(data);
		window.console.log(service);
		return service;
	};

	const [service] = createResource(props.id, () => fetchService(props.id));

	return (
		<>
			<div class="p-6">
				<h3 class="mb-2 text-xl font-bold text-white">Welcome to the CORDS widget</h3>
				<p class="text-slate-200">Here you can view similar services</p>
			</div>
			<div class="p-3 text-black bg-slate-100">
				{service.loading && (
					<div class="flex-1 flex justify-center items-center">Loading...</div>
				)}
				{service.error && <div class="flex-1 flex justify-center items-center">Error</div>}
				{service() && service().hydratedSimilarResources && (
					<For each={service().hydratedSimilarResources}>
						{(service) => {
							return (
								<ServiceItem
									id={service.id}
									name={service.name.en}
									description={service.description.en}
								/>
							);
						}}
					</For>
				)}
			</div>
		</>
	);
};

export default Home;
