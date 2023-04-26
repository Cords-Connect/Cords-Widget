import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
import tailwindConfig from "./tailwind.config";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import presetRemToPx from "./presetRemToPx";

export default defineConfig({
	presets: [presetAutoprefix(), presetTailwind(), presetRemToPx()],
	...tailwindConfig,
});
