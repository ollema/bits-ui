<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getCtx, getAttrs } from "../ctx.js";
	import type { TickProps } from "../types.js";

	type $$Props = TickProps;

	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { tick }
	} = getCtx();

	const attrs = getAttrs("tick");

	$: builder = $tick();
	$: Object.assign(builder, attrs);
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<span use:melt={builder} {...$$restProps} />
{/if}
