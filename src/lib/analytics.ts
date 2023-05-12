import Cookies from "js-cookie";
import { z } from "zod";

const AnalyticSchema = z.object({
	url: z.string().url(),
	totalTime: z.number(),
	startDate: z.string(),
	endDate: z.string(),
});

export const initializeAnalytics = () => {
	const startDate = new Date();

	window.addEventListener("beforeunload", () => {
		const endDate = new Date();
		const totalTime = (endDate.getTime() - startDate.getTime()) / 1000;

		const newAnalytic = {
			url: window.location.href,
			totalTime,
			startDate,
			endDate,
		};

		const analytics = Cookies.get("analytics");
		if (analytics) {
			const validAnalytics = AnalyticSchema.array().safeParse(JSON.parse(analytics));
			if (validAnalytics.success) {
				Cookies.set("analytics", JSON.stringify([...validAnalytics.data, newAnalytic]));
			} else {
				Cookies.set("analytics", JSON.stringify([newAnalytic]));
			}
		} else {
			Cookies.set("analytics", JSON.stringify([newAnalytic]));
		}
	});
};
