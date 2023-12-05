import type { APISchema } from "@/types";
import {
	asChild,
	enums,
	idsSlotProp,
	portalProp,
	transitionProps
} from "@/content/api-reference/helpers.js";
import type * as Dialog from "$lib/bits/dialog/_types";
import { focusProp } from "./extended-types";
import * as C from "@/content/constants";
import { builderAndAttrsSlotProps } from "./helpers";

export const root: APISchema<Dialog.Props> = {
	title: "Root",
	description: "The root component used to set and manage the state of the dialog.",
	props: {
		preventScroll: {
			type: C.BOOLEAN,
			default: C.TRUE,
			description: "Whether or not to prevent scroll on the body when the dialog is open."
		},
		closeOnEscape: {
			type: C.BOOLEAN,
			default: C.TRUE,
			description: "Whether to close the dialog when the escape key is pressed."
		},
		closeOnOutsideClick: {
			type: C.BOOLEAN,
			default: C.TRUE,
			description: "Whether to close the dialog when a click occurs outside of it."
		},
		open: {
			type: C.BOOLEAN,
			default: C.FALSE,
			description: "Whether or not the dialog is open."
		},
		onOpenChange: {
			type: {
				type: C.FUNCTION,
				definition: "(open: boolean) => void"
			},
			description: "A callback function called when the open state changes."
		},
		openFocus: {
			type: focusProp,
			description: "Override the initial focus when the dialog is opened."
		},
		closeFocus: {
			type: focusProp,
			description: "Override the focus when the dialog is closed."
		},
		portal: { ...portalProp("dialog") }
	},
	slotProps: {
		ids: idsSlotProp
	}
};

export const close: APISchema<Dialog.CloseProps> = {
	title: "Close",
	description: "A button used to close the dialog.",
	props: { asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "dialog-close",
			description: "Present on the close button."
		}
	]
};

export const content: APISchema<Dialog.ContentProps> = {
	title: "Content",
	description: "The content displayed within the dialog modal.",
	props: { ...transitionProps, asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "state",
			value: enums("open", "closed"),
			description: "The state of the dialog.",
			isEnum: true
		},
		{
			name: "dialog-content",
			description: "Present on the content."
		}
	]
};

export const title: APISchema<Dialog.TitleProps> = {
	title: "Title",
	description: "An accessibile title for the dialog.",
	props: {
		level: {
			type: {
				type: C.ENUM,
				definition: enums("h1", "h2", "h3", "h4", "h5", "h6")
			},
			description: "The heading level of the title."
		},
		asChild
	},
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "dialog-title",
			description: "Present on the title."
		}
	]
};

export const description: APISchema<Dialog.DescriptionProps> = {
	title: "Description",
	description: "An accessibile description for the dialog.",
	props: { asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "dialog-description",
			description: "Present on the description."
		}
	]
};

export const trigger: APISchema<Dialog.TriggerProps> = {
	title: "Trigger",
	description: "The element which opens the dialog on press.",
	props: { asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "dialog-trigger",
			description: "Present on the trigger."
		}
	]
};

export const overlay: APISchema<Dialog.OverlayProps> = {
	title: "Overlay",
	description: "An overlay which covers the body when the dialog is open.",
	props: { ...transitionProps, asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "state",
			value: enums("open", "closed"),
			description: "The state of the dialog.",
			isEnum: true
		},
		{
			name: "dialog-overlay",
			description: "Present on the overlay."
		}
	]
};

export const portal: APISchema<Dialog.PortalProps> = {
	title: "Portal",
	description: "A portal which renders the dialog into the body when it is open.",
	props: { asChild },
	slotProps: { ...builderAndAttrsSlotProps },
	dataAttributes: [
		{
			name: "portal",
			description: "Present on the portal."
		},
		{
			name: "dialog-portal",
			description: "Present on the portal."
		}
	]
};

export const dialog = [root, trigger, content, overlay, portal, close, title, description];
