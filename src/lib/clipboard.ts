import Cookies from "js-cookie";
import { createSignal } from "solid-js";
import { z } from "zod";
import { ServiceSchema } from "../service";

export const [clipboardIDs, setClipboardIDs] = createSignal<string[]>([]);

export const saveService = (id: string) => {
	if (clipboardIDs().includes(id)) {
		return;
	} else {
		Cookies.set("clipboard", JSON.stringify([...clipboardIDs(), id]), {
			sameSite: "None",
			secure: true,
		});
		setClipboardIDs([...clipboardIDs(), id]);
	}
};

export const removeService = (id: string) => {
	const newClipboard = clipboardIDs().filter((service) => service !== id);
	Cookies.set("clipboard", JSON.stringify(newClipboard), {
		sameSite: "None",
		secure: true,
	});
	setClipboardIDs(newClipboard);
};

export const isSaved = (id: string) => clipboardIDs().includes(id);

export const initializeClipboard = () => {
	const clipboardCookie = Cookies.get("clipboard");
	if (!clipboardCookie) {
		Cookies.set("clipboard", JSON.stringify([]), {
			sameSite: "None",
			secure: true,
		});
	} else {
		const services: unknown = JSON.parse(clipboardCookie);
		const validServices = z.string().array().safeParse(services);
		if (validServices.success) {
			setClipboardIDs(validServices.data);
		} else {
			setClipboardIDs([]);
			Cookies.set("clipboard", JSON.stringify([]), {
				sameSite: "None",
				secure: true,
			});
		}
	}
};

export const fetchClipboard = async (clipboardIDs: string[]) => {
	if (clipboardIDs.length === 0) return [];
	let ids = "";
	clipboardIDs.forEach(
		(id, index) =>
			(ids += `ids${encodeURIComponent(`[${index}]`)}=${id}${
				index !== clipboardIDs.length - 1 ? "&" : ""
			}`)
	);
	const response = await fetch(`https://api.cords.ai/search?${ids}`);
	const data = await response.json();
	return z.object({ data: ServiceSchema.array() }).parse(data).data;
};
