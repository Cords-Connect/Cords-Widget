import ServiceItem from "./ServiceItem";
import { ServiceSchema } from "./service";
import { Component, For, createResource } from "solid-js";

type Props = {
	id: string;
};

const Recommended: Component<Props> = (props) => {
	const fetchService = async (id: string) => {
		const response = await fetch(`https://backend-api-dev.cords.dev/resource/${id}`);
		const data = await response.json();
		return ServiceSchema.parse(data);
	};

	const [service] = createResource(
		() => props.id,
		() => fetchService(props.id)
	);

	return (
		<div class="p-3 text-black bg-slate-100">
			{service.loading && (
				<div class="flex-1 flex justify-center items-center">Loading...</div>
			)}
			{service.error && <div class="flex-1 flex justify-center items-center">Error</div>}
			{service() && service().recommendations && (
				<For each={service().recommendations}>
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
	);
};

export default Recommended;
