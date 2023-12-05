import type { APISchema } from "@/types";
import * as C from "@/content/constants.js";
import { union, enums, asChild, transitionProps } from "@/content/api-reference/helpers.js";
import type * as Accordion from "$lib/bits/accordion/_types.js";
import { builderAndAttrsSlotProps } from "./helpers";

const root: APISchema<Accordion.Props<false>> = {
	title: "Root",
	description: "The root accordion component used to set and manage the state of the accordion.",
	props: {
		multiple: {
			default: "false",
			type: C.BOOLEAN,
			description: "Whether or not multiple accordion items can be active at the same time."
		},
		disabled: {
			default: "false",
			type: C.BOOLEAN,
			description: "Whether or not the accordion is disabled."
		},
		value: {
			type: {
				type: C.UNION,
				definition: union("string", "undefined")
			},
			description: "The active accordion item value."
		},
		onValueChange: {
			type: {
				type: C.FUNCTION,
				definition: "(value: string | undefined) => void"
			},
			description: "A callback function called when the active accordion item value changes."
		},
		asChild
	},
	slotProps: {
		...builderAndAttrsSlotProps
	},
	dataAttributes: [
		{
			name: "orientation",
			value: enums("horizontal", "vertical"),
			description: "The orientation of the accordion.",
			isEnum: true
		},
		{
			name: "accordion-root",
			value: "",
			description: "Present on the root element."
		}
	]
};

const item: APISchema<Accordion.ItemProps> = {
	title: "Item",
	description: "An accordion item.",
	props: {
		value: {
			required: true,
			type: "string",
			description: "The value of the accordion item."
		},
		disabled: {
			default: "false",
			type: "boolean",
			description: "Whether or not the accordion item is disabled."
		},
		asChild
	},
	slotProps: {
		...builderAndAttrsSlotProps
	},
	dataAttributes: [
		{
			name: "state",
			value: enums("open", "closed"),
			description: "The state of the accordion item.",
			isEnum: true
		},
		{
			name: "disabled",
			value: "",
			description: "Present when the accordion item is disabled."
		},
		{
			name: "accordion-item",
			description: "Present on the item element."
		}
	]
};

const trigger: APISchema<Accordion.TriggerProps> = {
	title: "Trigger",
	description: "The accordion item trigger, which opens and closes the accordion item.",
	props: { asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "state",
			value: enums("open", "closed"),
			description: "The state of the accordion item.",
			isEnum: true
		},
		{
			name: "disabled",
			description: "Present when the accordion item is disabled."
		},
		{
			name: "value",
			description: "The value of the accordion item."
		},
		{
			name: "accordion-trigger",
			description: "Present on the trigger element."
		}
	]
};

const content: APISchema<Accordion.ContentProps> = {
	title: "Content",
	description: "The accordion item content, which is displayed when the item is open.",
	props: { ...transitionProps, asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "state",
			value: enums("open", "closed"),
			description: "The state of the accordion item.",
			isEnum: true
		},
		{
			name: "disabled",
			description: "Present when the accordion item is disabled."
		},
		{
			name: "value",
			description: "The value of the accordion item."
		},
		{
			name: "accordion-content",
			description: "Present on the content element."
		}
	]
};

const header: APISchema<Accordion.HeaderProps> = {
	title: "Header",
	description: "The accordion item header, which wraps the trigger and makes it more accessible.",
	props: {
		level: {
			type: {
				type: C.ENUM,
				definition: union("1", "2", "3", "4", "5", "6")
			},
			description:
				"The heading level to use for the header. This will be set as the `aria-level` attribute."
		},
		asChild
	},
	slotProps: {
		...builderAndAttrsSlotProps
	},
	dataAttributes: [
		{
			name: "heading-level",
			value: enums("1", "2", "3", "4", "5", "6"),
			description: "The heading level of the header.",
			isEnum: true
		},
		{
			name: "accordion-header",
			description: "Present on the header element."
		}
	]
};

export const accordion = [root, item, header, trigger, content];
