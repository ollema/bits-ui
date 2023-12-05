import type { HTMLDivAttributes, HTMLSpanAttributes } from "$lib/internal/index.js";
import type * as I from "./_types.js";
import type {
	CellProps,
	DateProps,
	GridBodyProps,
	GridHeadProps,
	GridRowProps,
	GridProps,
	HeadCellProps,
	HeaderProps,
	HeadingProps,
	NextButtonProps,
	PrevButtonProps,
	NextButtonEvents,
	PrevButtonEvents,
	DateEvents,
	Events as CalendarEvents
} from "$lib/bits/range-calendar/types.js";
import type {
	TriggerProps,
	ContentProps,
	ArrowProps,
	CloseProps,
	CloseEvents,
	TriggerEvents
} from "$lib/bits/popover/types.js";
import type { SegmentEvents } from "$lib/bits/date-range-field/types.js";

type Props = I.Props;
type LabelProps = I.Props & HTMLSpanAttributes;
type SegmentProps = I.SegmentProps & HTMLDivAttributes;
type InputProps = I.InputProps & HTMLDivAttributes;
type DescriptionProps = I.DescriptionProps & HTMLDivAttributes;
type CalendarProps = I.CalendarProps & HTMLDivAttributes;

export type {
	Props,
	CalendarProps,
	LabelProps,
	DescriptionProps,
	InputProps,
	SegmentProps,
	CellProps,
	DateProps,
	GridBodyProps,
	GridHeadProps,
	GridRowProps,
	GridProps,
	HeadCellProps,
	HeaderProps,
	HeadingProps,
	NextButtonProps,
	PrevButtonProps,
	TriggerProps,
	ContentProps,
	ArrowProps,
	CloseProps,
	//
	CloseEvents,
	TriggerEvents,
	NextButtonEvents,
	PrevButtonEvents,
	DateEvents,
	CalendarEvents,
	SegmentEvents
};
