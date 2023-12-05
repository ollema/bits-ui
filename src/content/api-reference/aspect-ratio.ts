import type { APISchema } from "@/types";
import type * as AspectRatio from "$lib/bits/aspect-ratio/_types.js";
import * as C from "@/content/constants";

const root: APISchema<AspectRatio.Props> = {
	title: "Root",
	description: "The aspect ratio component.",
	props: {
		ratio: {
			type: C.NUMBER,
			default: "1",
			description: "The desired aspect ratio."
		}
	},
	dataAttributes: [
		{
			name: "aspect-ratio-root",
			description: "Present on the element."
		}
	]
};

export const aspectRatio = [root];
