import { Show, createSignal, lazy } from "solid-js";
import {
	FaSolidClipboardCheck,
	FaSolidHouse,
	FaSolidMagnifyingGlass,
	FaSolidQuestion,
	FaSolidX,
} from "solid-icons/fa";
import { Transition } from "solid-transition-group";
import { initializeClipboard } from "./lib/clipboard";

const Home = lazy(() => import("./Home"));
const Clipboard = lazy(() => import("./Clipboard"));

const App = () => {
	// signal for widget open/close
	const [open, setOpen] = createSignal(false);
	const [page, setPage] = createSignal("home");
	const toggle = () => setOpen(!open());
	const id = "9f19b5ed-658d-4370-bc71-ee0a4ce7d30d";

	// Initialize clipboard
	initializeClipboard();

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
						<header class="flex justify-between p-4 items-center">
							{page() !== "home" && (
								<h3 class="text-lg font-bold">
									{page().charAt(0).toUpperCase() + page().slice(1)}
								</h3>
							)}
							<nav class="flex-1 flex justify-end">
								<button
									onClick={() => setPage("home")}
									class="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50 mr-2"
								>
									<FaSolidHouse size={14} />
								</button>
								<button
									onClick={() => setPage("clipboard")}
									class="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50 mr-2"
								>
									<FaSolidClipboardCheck size={14} />
								</button>
								<a
									target="_blank"
									href="https://cords.dev"
									class="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50 mr-2"
								>
									<FaSolidMagnifyingGlass size={14} />
								</a>
								<button
									onClick={toggle}
									class="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800 bg-opacity-30 text-white transition-colors hover:bg-opacity-50"
								>
									<FaSolidX size={14} />
								</button>
							</nav>
						</header>
						{page() === "home" && <Home id={id} />}
						{page() === "clipboard" && <Clipboard />}
					</div>
				</div>
			</Show>
		</Transition>
	);
};

export default App;
