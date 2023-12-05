import type { APISchema } from "@/types";
import { asChild, attrsSlotProp, enums } from "@/content/api-reference/helpers.js";
import type * as Switch from "$lib/bits/switch/_types.js";
import * as C from "@/content/constants.js";
import { builderAndAttrsSlotProps } from "./helpers";

const root: APISchema<Switch.Props> = {
	title: "Root",
	description: "The root switch component used to set and manage the state of the switch.",
	props: {
		checked: {
			default: C.FALSE,
			type: C.BOOLEAN,
			description: "Whether or not the switch is checked."
		},
		onCheckedChange: {
			type: {
				type: C.FUNCTION,
				definition: "(checked: boolean) => void"
			},
			description: "A callback function called when the checked state of the switch changes."
		},
		disabled: {
			default: C.FALSE,
			type: C.BOOLEAN,
			description: "Whether or not the switch is disabled."
		},
		includeInput: {
			default: C.FALSE,
			type: C.BOOLEAN,
			description:
				"Whether or not to include the input element in the switch. This will automatically add a hidden input element to the switch that will be checked when the switch is checked."
		},
		inputAttrs: {
			type: C.OBJECT,
			description: "Attributes to be spread onto the hidden input element."
		},
		name: {
			type: C.STRING,
			description:
				"The name of the hidden input element, used to identify the input in form submissions."
		},
		required: {
			default: C.FALSE,
			type: C.BOOLEAN,
			description: "Whether or not the switch is required to be checked."
		},
		value: {
			type: C.STRING,
			description:
				"The value of the hidden input element to be used in form submissions when the switch is checked."
		},
		asChild
	},
	slotProps: {
		...builderAndAttrsSlotProps
	},
	dataAttributes: [
		{
			name: "state",
			description: "The switch's checked state.",
			value: enums("checked", "unchecked"),
			isEnum: true
		},
		{
			name: "checked",
			description: "Present when the switch is checked."
		},
		{
			name: "disabled",
			description: "Present when the switch is disabled."
		},
		{
			name: "switch-root",
			description: "Present on the root element."
		}
	]
};

const thumb: APISchema<Switch.ThumbProps> = {
	title: "Thumb",
	description: "The thumb on the switch used to indicate the switch's state.",
	props: { asChild },
	slotProps: {
		attrs: attrsSlotProp,
		checked: {
			type: C.BOOLEAN,
			description: "Whether or not the switch is checked."
		}
	},
	dataAttributes: [
		{
			name: "state",
			description: "The switch's checked state.",
			value: enums("checked", "unchecked"),
			isEnum: true
		},
		{
			name: "checked",
			description: "Present when the switch is checked."
		},
		{
			name: "switch-thumb",
			description: "Present on the thumb element."
		}
	]
};

export const switchData = [root, thumb];
