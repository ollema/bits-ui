import * as C from "@/content/constants.js";
import type * as DateField from "$lib/bits/date-field/_types.js";
import type { APISchema } from "@/types";
import { enums, idsSlotProp, union, asChild } from "@/content/api-reference/helpers.js";
import { builderAndAttrsSlotProps } from "./helpers";

export const root: APISchema<DateField.Props> = {
	title: "Root",
	description: "The root date field component.",
	props: {
		value: {
			type: "DateValue",
			description: "The selected date."
		},
		onValueChange: {
			type: {
				type: C.FUNCTION,
				definition: "(date: DateValue | undefined) => void"
			},
			description: "A function that is called when the selected date changes."
		},
		placeholder: {
			type: "DateValue",
			description:
				"The placeholder date, which is used to determine what date to start the segments from when no value exists."
		},
		onPlaceholderChange: {
			type: {
				type: C.FUNCTION,
				definition: "(date: DateValue) => void"
			},
			description: "A function that is called when the placeholder date changes."
		},
		isDateUnavailable: {
			type: {
				type: C.FUNCTION,
				definition: "(date: DateValue) => boolean"
			},
			description: "A function that returns whether or not a date is unavailable."
		},
		hourCycle: {
			type: {
				type: C.ENUM,
				definition: union("12", "24")
			},
			description: "The hour cycle to use for formatting times. Defaults to the locale preference"
		},
		granularity: {
			type: {
				type: C.ENUM,
				definition: enums("day", "hour", "minute", "second")
			},
			description:
				"The granularity to use for formatting the field. Defaults to `'day'` if a `CalendarDate` is provided, otherwise defaults to `'minute'`. The field will render segments for each part of the date up to and including the specified granularity."
		},
		hideTimeZone: {
			type: C.BOOLEAN,
			description: "Whether or not to hide the time zone segment of the field.",
			default: C.FALSE
		},
		validationId: {
			type: C.STRING,
			description:
				"The id of your validation message element, if any, which will be applied to the `aria-describedby` attribute of the appropriate elements when a validation error occurs."
		},
		descriptionId: {
			type: C.STRING,
			description:
				"The id of your description element, if any, which will be applied to the `aria-describedby` attribute of the appropriate elements."
		},
		maxValue: {
			type: "DateValue",
			description: "The maximum valid date that can be entered."
		},
		minValue: {
			type: "DateValue",
			description: "The minimum valid date that can be entered."
		},
		locale: {
			type: C.STRING,
			description: "The locale to use for formatting dates."
		},
		disabled: {
			default: C.FALSE,
			type: C.BOOLEAN,
			description: "Whether or not the accordion is disabled."
		},
		readonly: {
			type: C.BOOLEAN,
			description: "Whether or not the field is readonly.",
			default: C.FALSE
		}
	},
	slotProps: {
		ids: idsSlotProp,
		isInvalid: {
			type: C.BOOLEAN,
			description: "Whether or not the field is invalid."
		}
	}
};

const input: APISchema<DateField.InputProps> = {
	title: "Input",
	description: "The container for the segments of the date field.",
	props: {
		asChild
	},
	slotProps: {
		...builderAndAttrsSlotProps,
		segments: {
			type: {
				type: C.ARRAY,
				definition: "{ part: SegmentPart; value: string; }[]"
			},
			description: "An array of objects used to render the segments of the date field."
		}
	},
	dataAttributes: [
		{
			name: "invalid",
			description: "Present on the element when the field is invalid."
		},
		{
			name: "disabled",
			description: "Present on the element when the field is disabled."
		},
		{
			name: "date-field-input",
			description: "Present on the element."
		}
	]
};

export const segment: APISchema<DateField.SegmentProps> = {
	title: "Segment",
	description: "A segment of the date field.",
	props: {
		part: {
			type: {
				type: "SegmentPart",
				definition: enums(
					"month",
					"day",
					"year",
					"hour",
					"minute",
					"second",
					"dayPeriod",
					"timeZoneName",
					"literal"
				)
			},
			description: "The part of the date to render.",
			required: true
		},
		asChild
	},
	slotProps: {
		...builderAndAttrsSlotProps
	},
	dataAttributes: [
		{
			name: "invalid",
			description: "Present on the element when the field is invalid"
		},
		{
			name: "disabled",
			description: "Present on the element when the field is disabled"
		},
		{
			name: "segment",
			value: enums(
				"month",
				"day",
				"year",
				"hour",
				"minute",
				"second",
				"dayPeriod",
				"timeZoneName",
				"literal"
			),
			isEnum: true,
			description: "The type of segment the element represents."
		},
		{
			name: "date-field-segment",
			description: "Present on the element."
		}
	]
};

export const label: APISchema<DateField.LabelProps> = {
	title: "Label",
	description: "The label for the date field.",
	props: { asChild },
	slotProps: {
		...builderAndAttrsSlotProps
	},
	dataAttributes: [
		{
			name: "invalid",
			description: "Present on the element when the field is invalid"
		},
		{
			name: "date-field-label",
			description: "Present on the element."
		}
	]
};

export const dateField = [root, input, segment, label];
