import { selector } from "recoil";
import { textState } from "./textState";

export const charCountState = selector({
	key: "charCountState", // unique ID (with respect to other atoms/selectors)
	get: ({ get }) => {
		const text = get(textState);

		return text.length;
	},
});
