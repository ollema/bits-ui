<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getAttrs } from "../ctx.js";
	import type { RangeProps } from "../types.js";

	type $$Props = RangeProps;

	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { range }
	} = getCtx();

	const attrs = getAttrs("range");

	$: builder = $range;
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<span use:melt={builder} {...$$restProps} />
{/if}
