<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { setArrow, getAttrs } from "../ctx.js";
	import type { ArrowProps } from "../types.js";

	type $$Props = ArrowProps;

	export let size = 8;
	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { arrow }
	} = setArrow(size);

	const attrs = getAttrs("arrow");

	$: builder = $arrow;
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<div use:melt={builder} {...$$restProps} />
{/if}
