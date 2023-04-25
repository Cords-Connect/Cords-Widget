import { Component, For, createResource } from "solid-js";
import { z } from "zod";

const ServiceSchema = z.object({
	id: z.string(),
	name: z.object({
		en: z.string(),
		fr: z.string(),
	}),
	description: z.object({
		en: z.string(),
		fr: z.string(),
	}),
	website: z.object({
		en: z.string(),
		fr: z.string(),
	}),
	email: z.string().email().or(z.literal("")),
	hours: z.string(),
	address: z.object({
		street1: z.string(),
		street2: z.string(),
		city: z.string(),
		postalCode: z.string(),
		province: z.string(),
		country: z.string(),
	}),
	phoneNumbers: z
		.object({
			phone: z.string(),
			name: z.string(),
			type: z.string(),
		})
		.array(),
	partner: z.string(),
});

type Props = {
	keywords: string;
};

const Similar: Component<Props> = (props) => {
	const fetchSimilarFromKeywords = async (keywords: string) => {
		const response = await fetch(
			`https://backend-api-dev.cords.dev/search?q=${keywords}&lat=45.4995&lng=-73.5848`
		);
		const data = await response.json();
		return z.object({ data: ServiceSchema.array() }).parse(data).data;
	};

	const [services] = createResource(() => fetchSimilarFromKeywords(props.keywords));

	return (
		<div class="bg-slate-100 flex-1 p-4 flex flex-col text-black">
			{services.loading && (
				<div class="flex-1 flex justify-center items-center">Loading...</div>
			)}
			{services.error && <div class="flex-1 flex justify-center items-center">Error</div>}
			{services() && (
				<For each={services()}>
					{(service) => (
						<div class="bg-white p-4 mb-4 rounded-lg shadow">{service.name.en}</div>
					)}
				</For>
			)}
		</div>
	);
};

export default Similar;
