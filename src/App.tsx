import { Component, Show, createSignal, lazy } from "solid-js";
const Similar = lazy(() => import("./Similar"));

type Props = {
	keywords: string;
};

const App: Component<Props> = (props) => {
	// signal for widget open/close
	const [open, setOpen] = createSignal(false);
	const toggle = () => setOpen(!open());

	return (
		<Show
			when={open()}
			fallback={
				<button
					onClick={toggle}
					class="font-lato fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl"
				>
					{"?"}
				</button>
			}
		>
			<div class="fixed bottom-6 right-6 z-50 h-[600px] w-[400px] overflow-x-hidden overflow-y-scroll rounded-2xl bg-white shadow-2xl font-lato flex flex-col">
				<div class="bg-black bg-gradient-to-r from-slate-800 to-slate-600 text-white">
					<div class="flex justify-end p-4">
						<button
							onClick={toggle}
							class="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50"
						>
							X
						</button>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-xl font-bold text-white">
							Welcome to the CORDS widget
						</h3>
						<p class="text-slate-200">Here you can view similar services</p>
					</div>
				</div>
				<Similar keywords={props.keywords} />
			</div>
		</Show>
	);
};

export default App;
