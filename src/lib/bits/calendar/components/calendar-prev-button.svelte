<script lang="ts">
	import { melt } from "@melt-ui/svelte";
	import { getAttrs, getCtx } from "../ctx.js";
	import type { PrevButtonEvents, PrevButtonProps } from "../types.js";
	import { createDispatcher } from "$lib/internal/events.js";

	type $$Props = PrevButtonProps;
	type $$Events = PrevButtonEvents;

	export let asChild: $$Props["asChild"] = false;

	const {
		elements: { prevButton }
	} = getCtx();

	const attrs = getAttrs("prev-button");

	$: builder = $prevButton;
	$: Object.assign(builder, attrs);

	const dispatch = createDispatcher();
</script>

{#if asChild}
	<slot {builder} />
{:else}
	<button
		use:melt={builder}
		type="button"
		{...$$restProps}
		on:m-click={dispatch}
	>
		<slot {builder} />
	</button>
{/if}
