import type { HTMLSpanAttributes } from "$lib/internal/index.js";
import type { CustomEventHandler } from "$lib/index.js";
import type { HTMLInputAttributes } from "svelte/elements";
import type * as I from "./_types.js";

type Props = I.Props & HTMLSpanAttributes;

type RangeProps = I.RangeProps & HTMLSpanAttributes;

type ThumbProps = I.ThumbProps & HTMLSpanAttributes;

type TickProps = I.TickProps & HTMLSpanAttributes;

type ThumbEvents<T extends Element = HTMLSpanElement> = {
	keydown: CustomEventHandler<KeyboardEvent, T>;
};

type InputProps = Omit<HTMLInputAttributes, "value">;

export type {
	Props,
	RangeProps,
	ThumbProps,
	InputProps,
	TickProps,
	//
	ThumbEvents
};
