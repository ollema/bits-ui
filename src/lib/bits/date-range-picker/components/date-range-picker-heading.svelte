<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCalendarAttrs, getCtx } from "../ctx.js";
	import type { HeadingProps } from "../types.js";

	type $$Props = HeadingProps;

	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { heading },
		states: { headingValue }
	} = getCtx();

	const attrs = getCalendarAttrs("heading");

	$: builder = $heading;
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} headingValue={$headingValue} />
{:else}
	<div use:melt={builder} {...$$restProps}>
		<slot {builder} headingValue={$headingValue}>
			{$headingValue}
		</slot>
	</div>
{/if}
