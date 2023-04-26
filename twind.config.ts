import { Rule, defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
import tailwindConfig from "./tailwind.config";
// @ts-ignore
import presetRemToPx from "./presetRemToPx";

export default defineConfig({
	presets: [presetAutoprefix(), presetTailwind(), presetRemToPx()],
	...tailwindConfig,
});
