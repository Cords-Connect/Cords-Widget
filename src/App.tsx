import { Component, Show, createSignal, lazy } from "solid-js";
import { FaSolidQuestion, FaSolidX } from "solid-icons/fa";
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
					class="font-lato fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-2xl"
				>
					<FaSolidQuestion size={"1.3rem"} />
				</button>
			}
		>
			<div class="fixed h-screen w-screen left-0 right-0 top-0 bottom-0 sm:left-auto sm:top-auto sm:bottom-6 sm:right-6 z-50 sm:h-[40rem] sm:w-[25rem] overflow-x-hidden overflow-y-scroll sm:rounded-2xl bg-white shadow-2xl font-lato flex flex-col">
				<div class="bg-black bg-gradient-to-r from-slate-800 to-slate-600 text-white">
					<div class="flex justify-end p-4">
						<button
							onClick={toggle}
							class="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50"
						>
							<FaSolidX size={"0.9rem"} />
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
