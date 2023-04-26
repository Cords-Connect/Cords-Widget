const presetRemToPx = ({ baseValue = 16 } = {}) => {
	return {
		finalize(rule) {
			return {
				...rule,
				// d: the CSS declaration body
				// Based on https://github.com/TheDutchCoder/postcss-rem-to-px/blob/main/index.js
				d: rule.d
					? rule.d.replace(
							/"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)rem/g,
							(match, p1) => {
								if (p1 === undefined) return match;
								return `${p1 * baseValue}${p1 == 0 ? "" : "px"}`;
							}
					  )
					: "",
			};
		},
	};
};

export default presetRemToPx;
