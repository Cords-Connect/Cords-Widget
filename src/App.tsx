import { Component, For, Show, createResource, createSignal, lazy } from "solid-js";
import { FaSolidQuestion, FaSolidX } from "solid-icons/fa";
import { Transition } from "solid-transition-group";
import { z } from "zod";
import Cookies from "js-cookie";

const BaseServiceSchema = z.object({
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

export const ServiceSchema = z.object({
	...BaseServiceSchema.shape,
	recommendations: BaseServiceSchema.array().optional(),
});

export type Service = z.infer<typeof ServiceSchema>;

const App = () => {
	// signal for widget open/close
	const [open, setOpen] = createSignal(false);
	const toggle = () => setOpen(!open());
	const id = "9f19b5ed-658d-4370-bc71-ee0a4ce7d30d";
	const userId = Cookies.get("userId") || Cookies.set("userId", Math.random().toString());

	console.log(userId);

	const fetchService = async (id: string) => {
		const response = await fetch(`https://backend-api-dev.cords.dev/resource/${id}`);
		const data = await response.json();
		return ServiceSchema.parse(data);
	};

	const [service] = createResource(() => fetchService(id));

	return (
		<Transition
			onEnter={(el, done) => {
				const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
					duration: 100,
				});
				a.finished.then(done);
			}}
			onExit={(el, done) => {
				const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
					duration: 100,
				});
				a.finished.then(done);
			}}
		>
			<Show
				when={open()}
				fallback={
					<button
						onClick={toggle}
						class="font-lato fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl"
					>
						<FaSolidQuestion size={20} />
					</button>
				}
			>
				<div class="all fixed h-screen w-screen left-0 right-0 top-0 bottom-0 sm:left-auto sm:top-auto sm:bottom-6 sm:right-6 z-50 sm:h-[600px] sm:w-[400px] overflow-x-hidden overflow-y-scroll sm:rounded-2xl bg-slate-100 shadow-2xl font-lato flex flex-col">
					<div class="bg-black bg-gradient-to-r from-slate-800 to-slate-600 text-white">
						<div class="flex justify-end p-4">
							<button
								onClick={toggle}
								class="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50"
							>
								<FaSolidX size={14} />
							</button>
						</div>
						<div class="p-6">
							<h3 class="mb-2 text-xl font-bold text-white">
								Welcome to the CORDS widget
							</h3>
							<p class="text-slate-200">Here you can view similar services</p>
						</div>
						<div class="px-3 text-black">
							{service.loading && (
								<div class="flex-1 flex justify-center items-center">
									Loading...
								</div>
							)}
							{service.error && (
								<div class="flex-1 flex justify-center items-center">Error</div>
							)}
							{service().recommendations && (
								<For each={service().recommendations}>
									{(service) => (
										<div class="bg-white p-4 mb-4 rounded-lg shadow">
											{service.name.en}{" "}
										</div>
									)}
								</For>
							)}
						</div>
					</div>
				</div>
			</Show>
		</Transition>
	);
};

export default App;
