import { customElement } from "solid-element";
import App from "./App";
import { twind, cssom, observe } from "@twind/core";
import "construct-style-sheets-polyfill";
import config from "../twind.config";

customElement("cords-widget", (props: { keywords?: string }, { element }) => {
	// check if keywords are passed in as props
	if (props?.keywords) return <App keywords={props.keywords} />;

	// check if keywords are passed in as attribute
	const elementKeywords = element.getAttribute("keywords");
	if (elementKeywords) return <App keywords={elementKeywords} />;

	// check if keywords are passed in as meta tag
	const metaKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute("content");
	if (metaKeywords) return <App keywords={metaKeywords} />;

	// if no keywords are found, throw error
	throw new Error(
		"Cords Widget Error: No keywords found. Please add keywords to your web component or add a keywords meta tag to you page."
	);
});

// Create separate CSSStyleSheet
const sheet = cssom(new CSSStyleSheet());

// Use sheet and config to create an twind instance. `tw` will
// append the right CSS to our custom stylesheet.
const tw = twind(config, sheet);

// get hold of the shadow dom root
const shadowRoot = document.querySelector("cords-widget")?.shadowRoot;

if (shadowRoot && shadowRoot !== null) {
	// create link element in the head for google font
	const font = document.createElement("link");
	font.href = "https://fonts.googleapis.com/css2?family=Lato&display=swap";
	font.rel = "stylesheet";
	document.head.appendChild(font);

	// link sheet target to shadow dom root
	shadowRoot.adoptedStyleSheets = [sheet.target];

	// finally, observe using tw function
	observe(tw, shadowRoot);
}
