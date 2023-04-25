import { Rule, defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
import tailwindConfig from "./tailwind.config";

export default defineConfig({
	presets: [presetAutoprefix(), presetTailwind()],
	...tailwindConfig,
});
