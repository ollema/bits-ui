/**
 * We define prop types without the HTMLAttributes here so that we can use them
 * to type-check our API documentation, which requires we document each prop,
 * but we don't want to document the HTML attributes.
 */

import type { Expand, OnChangeFn, AsChild, OmitDates, OmitFloating } from "$lib/internal/index.js";
import type { DateRange, SegmentPart } from "$lib/shared";
import type { DateValue } from "@internationalized/date";
import type { CreateDateRangePickerProps } from "@melt-ui/svelte";

type OmitStartEnd<T> = Omit<
	T,
	"startName" | "endName" | "startIds" | "endIds" | "dateFieldIds" | "popoverIds" | "calendarIds"
>;

type OmitForm<T> = Omit<T, "required" | "name">;

type WithOmission<T> = OmitForm<OmitDates<OmitStartEnd<OmitFloating<T>>>>;

type Props = Expand<
	WithOmission<CreateDateRangePickerProps> & {
		/**
		 * The open state of the popover.
		 * You can bind this to a boolean value to programmatically control the open state.
		 *
		 * @default false
		 */
		open?: boolean;

		/**
		 * A callback function called when the open state changes.
		 */
		onOpenChange?: OnChangeFn<boolean>;

		/**
		 * The value of the date field.
		 * You can bind this to a `DateValue` object to programmatically control the value.
		 */
		value?: DateRange;

		/**
		 * A callback function called when the value changes.
		 */
		onValueChange?: OnChangeFn<DateRange | undefined>;

		/**
		 * The placeholder date used to start the field.
		 */
		placeholder?: DateValue;

		/**
		 * A callback function called when the placeholder changes.
		 */
		onPlaceholderChange?: OnChangeFn<DateValue>;

		/**
		 * The id of the validation message element which is used to apply the
		 * appropriate `aria-describedby` attribute to the input.
		 */
		validationId?: string;

		/**
		 * The id of the description element which is used to describe the input.
		 * This is used to apply the appropriate `aria-describedby` attribute to the input.
		 */
		descriptionId?: string;
	} & AsChild
>;

type InputProps = AsChild;

type DescriptionProps = AsChild;

type LabelProps = AsChild;

type CalendarProps = AsChild;

type SegmentProps = Expand<
	{
		/**
		 * The type of field to render (start or end).
		 */
		type: "start" | "end";

		/**
		 * The part of the date to render.
		 */
		part: SegmentPart;
	} & AsChild
>;

export type { Props, CalendarProps, LabelProps, DescriptionProps, InputProps, SegmentProps };
