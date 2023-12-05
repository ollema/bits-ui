import type { APISchema } from "@/types";
import {
	arrowProps,
	asChild,
	enums,
	idsSlotProp,
	portalProp,
	transitionProps
} from "@/content/api-reference/helpers.js";
import { floatingPositioning } from "./floating.js";
import type * as Tooltip from "$lib/bits/tooltip/_types";
import * as C from "@/content/constants";
import { builderAndAttrsSlotProps } from "./helpers";

export const root: APISchema<Tooltip.Props> = {
	title: "Root",
	description: "The root component containing the parts of the tooltip.",
	props: {
		openDelay: {
			type: C.NUMBER,
			default: "700",
			description:
				"The amount of time in milliseconds to delay opening the tooltip when hovering over the trigger."
		},
		closeDelay: {
			type: C.NUMBER,
			default: "300",
			description:
				"The amount of time in milliseconds to delay closing the tooltip when the mouse leaves the trigger."
		},
		closeOnEscape: {
			type: C.BOOLEAN,
			default: C.TRUE,
			description: "Whether or not to close the tooltip when pressing the escape key."
		},
		closeOnPointerDown: {
			type: C.BOOLEAN,
			default: C.TRUE,
			description: "Whether or not to close the tooltip when clicking outside of the tooltip."
		},
		disableHoverableContent: {
			type: C.BOOLEAN,
			default: C.FALSE,
			description:
				"Whether or not to disable the hoverable content. This is useful when the content contains interactive elements."
		},
		group: {
			type: C.STRING,
			description: "The group the tooltip belongs to."
		},
		open: {
			type: C.BOOLEAN,
			default: "false",
			description: "The open state of the tooltip component."
		},
		onOpenChange: {
			type: {
				type: C.FUNCTION,
				definition: "(open: boolean) => void"
			},
			description: "A callback that fires when the open state changes."
		},
		portal: { ...portalProp("tooltip") }
	},
	slotProps: {
		ids: idsSlotProp
	}
};

export const trigger: APISchema<Tooltip.TriggerProps> = {
	title: "Trigger",
	description:
		"A component which triggers the opening and closing of the tooltip on hover or focus.",
	props: { asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "state",
			description: "The open state of the tooltip.",
			value: enums("open", "closed"),
			isEnum: true
		},
		{
			name: "tooltip-trigger",
			description: "Present on the trigger element."
		}
	]
};

export const content: APISchema<Tooltip.ContentProps> = {
	title: "Content",
	description: "The contents of the tooltip which are displayed when the tooltip is open.",
	props: { ...transitionProps, ...floatingPositioning, asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "tooltip-content",
			description: "Present on the content element."
		}
	]
};

export const arrow: APISchema<Tooltip.ArrowProps> = {
	title: "Arrow",
	description: "An optional arrow element which points to the trigger when the tooltip is open.",
	props: arrowProps,
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "arrow",
			description: "Present on the arrow element."
		},
		{
			name: "tooltip-arrow",
			description: "Present on the arrow element."
		}
	]
};

export const tooltip = [root, trigger, content, arrow];
