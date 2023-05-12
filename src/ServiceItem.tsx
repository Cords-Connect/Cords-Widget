import { FaRegularClipboard, FaSolidClipboardCheck } from "solid-icons/fa";
import { Component } from "solid-js";
import { isSaved, removeService, saveService } from "./lib/clipboard";

type Props = {
	id: string;
	name: string;
	description: string;
};

const ServiceItem: Component<Props> = (props) => {
	return (
		<div class="mb-3 bg-white p-3 rounded-lg shadow flex flex-col">
			<div class="flex-row flex mb-3 justify-between">
				<p class="text-base flex-1">{props.name}</p>
				<button
					onClick={() =>
						isSaved(props.id) ? removeService(props.id) : saveService(props.id)
					}
					class="flex justify-center items-center bg-slate-200 ml-1 h-8 w-8 rounded-full"
				>
					{isSaved(props.id) ? (
						<FaSolidClipboardCheck size={18} />
					) : (
						<FaRegularClipboard size={18} />
					)}
				</button>
			</div>
			<p class="text-sm text-slate-500 line-clamp-2">{props.description}</p>
		</div>
	);
};

export default ServiceItem;
