import type { PropSchema } from "@/types/api.js";
import * as C from "@/content/constants.js";
import { monthsPropType } from "./extended-types";

export const asChild = {
	type: C.BOOLEAN,
	default: C.FALSE,
	description: "Whether to use [render delegation](/docs/delegation) with this component or not."
};

const builderSlotProp: PropSchema = {
	type: {
		type: C.OBJECT,
		definition: "{ [k: string]: any; action: Action<any, any, any>&nbsp;}"
	},
	description:
		"The builder attributes and actions to apply to the element if using the `asChild` prop with [delegation](/docs/delegation)."
};

export const attrsSlotProp: PropSchema = {
	type: {
		type: C.OBJECT,
		definition: "Record&lt;string, string&gt;"
	},
	description:
		"Additional attributes to apply to the element if using the `asChild` prop with [delegation](/docs/delegation)."
};

export const builderAndAttrsSlotProps: Record<string, PropSchema> = {
	builder: builderSlotProp
};

export const monthsSlotProp: PropSchema = {
	type: monthsPropType,
	description: "The current months to display in the calendar. Used to render the calendar."
};

export const weekdaysSlotProp: PropSchema = {
	type: "string[]",
	description:
		"The days of the week to display in the calendar, typically used within the table header."
};

export const idsSlotProp: PropSchema = {
	type: {
		type: C.OBJECT,
		definition: "Record<string, string>"
	},
	description:
		"The ids of the elements within the component, useful when you don't necessarily want to provide a custom ID, but still want access to the ID being assigned (if any)."
};

export const arrowProps = {
	asChild,
	size: {
		type: C.NUMBER,
		default: "8",
		description: "The height and width of the arrow in pixels."
	}
};

const transitionProp: PropSchema = {
	type: {
		type: C.FUNCTION,
		definition: "(node: Element, params?: any) => TransitionConfig"
	},
	description: "A Svelte transition function to use when transitioning the content in and out."
};

const transitionConfigProp: PropSchema = {
	type: "TransitionConfig",
	description: "The configuration to apply to the transition."
};

export const transitionProps = {
	transition: transitionProp,
	transitionConfig: transitionConfigProp,
	inTransition: transitionProp,
	inTransitionConfig: transitionConfigProp,
	outTransition: transitionProp,
	outTransitionConfig: transitionConfigProp
};

export function portalProp(compName = "content") {
	return {
		type: {
			type: C.UNION,
			definition: union("string", "HTMLElement", "null", "undefined")
		},
		description: `Where to render the ${compName} when it is open. Defaults to the body. Can be disabled by passing \`null\``
	};
}

export function union(...types: string[]): string {
	return types
		.join(" | ")
		.replaceAll(" ", "&nbsp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

export function enums(...values: string[]): string {
	return values.map((value) => `'${value}'`).join(" | ");
}

export function seeFloating(content: string, link: string) {
	return `${content} [Floating UI reference](${link}).`;
}
