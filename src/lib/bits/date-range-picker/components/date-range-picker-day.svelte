<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getCalendarAttrs } from "../ctx.js";
	import type { DayProps } from "../types.js";

	type $$Props = DayProps;

	export let date: $$Props["date"];
	export let month: $$Props["month"];
	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { cell },
		helpers: { isDateDisabled, isDateUnavailable }
	} = getCtx();

	const attrs = getCalendarAttrs("day");

	$: builder = $cell(date, month);
	$: Object.assign(builder, attrs);
	$: disabled = $isDateDisabled(date);
	$: unavailable = $isDateUnavailable(date);
</script>

{#if asChild}
	<slot {builder} {disabled} {unavailable} />
{:else}
	<div use:melt={builder} {...$$restProps}>
		<slot {builder} {disabled} {unavailable}>
			{date.day}
		</slot>
	</div>
{/if}
