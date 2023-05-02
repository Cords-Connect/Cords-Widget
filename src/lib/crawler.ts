import * as cheerio from "cheerio";

type Page = {
	url: string;
	title: string;
	description: string;
	keywords: string;
};

const getUrl = (baseUrl: string, url: string) => {
	if (!url.includes("http")) {
		if (url.startsWith("/")) return `${baseUrl}${url}`;
		else return `${baseUrl}/${url}`;
	} else {
		return url;
	}
};

const getPages = async (baseUrl: string) => {
	const pages: Page[] = [];
	const pageSeen = new Map<string, boolean>();

	const crawl = async (url: string) => {
		if (pageSeen.get(url)) return;
		else pageSeen.set(url, true);

		const res = await fetch(url);
		const html = await res.text();
		const $ = cheerio.load(html);

		// Get page title, description, and keywords
		const title =
			$('meta[property="og:title"]').attr("content") ||
			$("title").text() ||
			$('meta[name="title"]').attr("content") ||
			"";
		const description =
			$('meta[property="og:description"]').attr("content") ||
			$('meta[name="description"]').attr("content") ||
			"";
		const keywords =
			$('meta[property="og:keywords"]').attr("content") ||
			$('meta[name="keywords"]').attr("content") ||
			"";
		const page = { url, title, description, keywords };
		pages.push(page);

		// Get all links on the page, and crawl them recursively
		const links = $("a");
		const hrefs = links
			.map((_, link) => link.attribs.href)
			.get()
			.filter((href) => getUrl(baseUrl, href).includes(baseUrl));

		for (const href of hrefs) {
			await crawl(getUrl(baseUrl, href));
		}
	};
	await crawl(baseUrl);

	return pages;
};

export default getPages;
