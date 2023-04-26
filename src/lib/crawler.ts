import * as cheerio from "cheerio";

const getUrl = (baseUrl: string, url: string) => {
	if (!url.includes("http")) {
		return `${baseUrl}/${url}`;
	} else if (url.startsWith("/")) {
		return `${baseUrl}${url}`;
	} else {
		return url;
	}
};

const seenUrls = new Map<string, boolean>();

const crawl = async (baseUrl: string, url: string) => {
	if (seenUrls.get(url)) return;
	else seenUrls.set(url, true);

	const res = await fetch(url);
	const html = await res.text();

	const $ = cheerio.load(html);
	const links = $("a");
	const hrefs = links.map((_, link) => link.attribs.href).get();

	console.log(hrefs);

	hrefs
		.filter((href) => getUrl(baseUrl, href).includes(baseUrl))
		.forEach((href) => {
			return crawl(baseUrl, getUrl(baseUrl, href));
		});
};

export default crawl;
