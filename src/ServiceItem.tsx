import { FaRegularBookmark, FaRegularMap, FaSolidBookmark, FaSolidPhone } from "solid-icons/fa";
import { Component } from "solid-js";
import { isSaved, removeService, saveService } from "./lib/clipboard";

type Props = {
	id: string;
	name: string;
	description: string;
};

const ServiceItem: Component<Props> = (props) => {
	return (
		<div class="bg-white p-4 flex flex-col items-start">
			<div class="flex-row flex mb-3 justify-between">
				<p class="text-base flex-1">{props.name}</p>
			</div>
			<p class="text-sm text-slate-500 line-clamp-2 mb-4">{props.description}</p>
			<div class="flex gap-2">
				<button
					onClick={() =>
						isSaved(props.id) ? removeService(props.id) : saveService(props.id)
					}
					class="flex gap-2 text-sm justify-center items-center border px-2.5 py-1.5 border-slate-200 rounded-full"
				>
					{isSaved(props.id) ? (
						<>
							<FaSolidBookmark size={16} class="text-gray-500" />
							Saved
						</>
					) : (
						<>
							<FaRegularBookmark size={16} class="text-gray-500" />
							Save
						</>
					)}
				</button>
				<button class="flex gap-2 text-sm justify-center items-center border px-2.5 py-1.5 border-slate-200 rounded-full">
					<FaSolidPhone size={15} class="text-gray-500" />
					Call
				</button>
				<button class="flex gap-2 text-sm justify-center items-center border px-2.5 py-1.5 border-slate-200 rounded-full">
					<FaRegularMap size={16} class="text-gray-500" />
					Directions
				</button>
			</div>
		</div>
	);
};

export default ServiceItem;
