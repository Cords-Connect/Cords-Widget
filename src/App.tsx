import { For, Show, createResource, createSignal } from "solid-js";
import {
	FaRegularClipboard,
	FaSolidClipboardCheck,
	FaSolidQuestion,
	FaSolidX,
} from "solid-icons/fa";
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

	// Initialize clipboard
	const [clipboard, setClipboard] = createSignal<string[]>([]);
	const clipboardCookie = Cookies.get("clipboard");
	if (!clipboardCookie) {
		Cookies.set("clipboard", JSON.stringify([]));
	} else {
		const services: unknown = JSON.parse(clipboardCookie);
		const validServices = z.string().array().safeParse(services);
		if (validServices.success) {
			setClipboard(validServices.data);
		} else {
			setClipboard([]);
			Cookies.set("clipboard", JSON.stringify([]));
		}
	}

	const fetchService = async (id: string) => {
		const response = await fetch(`https://backend-api-dev.cords.dev/resource/${id}`);
		const data = await response.json();
		return ServiceSchema.parse(data);
	};

	const saveService = (id: string) => {
		if (clipboard().includes(id)) {
			return;
		} else {
			Cookies.set("clipboard", JSON.stringify([...clipboard(), id]));
			setClipboard([...clipboard(), id]);
		}
	};

	const removeService = (id: string) => {
		const newClipboard = clipboard().filter((service) => service !== id);
		Cookies.set("clipboard", JSON.stringify(newClipboard));
		setClipboard(newClipboard);
	};

	const isSaved = (id: string) => clipboard().includes(id);

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
						<div class="p-3 text-black bg-slate-100">
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
									{(service) => {
										return (
											<div class="mb-3 bg-white p-3 rounded-lg shadow flex flex-col">
												<div class="flex-row flex mb-3 justify-between">
													<p class="text-base flex-1">
														{service.name.en}
													</p>
													<button
														onClick={() =>
															isSaved(service.id)
																? removeService(service.id)
																: saveService(service.id)
														}
														class="flex justify-center items-center bg-slate-200 ml-1 h-8 w-8 rounded-full"
													>
														{isSaved(service.id) ? (
															<FaSolidClipboardCheck size={18} />
														) : (
															<FaRegularClipboard size={18} />
														)}
													</button>
												</div>
												<p class="text-sm text-slate-500 line-clamp-2">
													{service.description.en}
												</p>
											</div>
										);
									}}
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
