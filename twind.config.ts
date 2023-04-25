import { Rule, defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

export default defineConfig({
	presets: [presetAutoprefix(), presetTailwind()],
	theme: {
		fontFamily: {
			sans: ["Helvetica", "sans-serif"],
			serif: ["Times", "serif"],
		},
		extend: {
			fontFamily: {
				lato: ["Lato", "Helvetica", "sans-serif"],
			},
			colors: {
				primary: "#0072CE",
			},
		},
	},
});
