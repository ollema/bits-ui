<script lang="ts">
	import { getCtx, getAttrs } from "../ctx.js";
	import type { CellProps } from "../types.js";

	type $$Props = CellProps;

	export let date: $$Props["date"];
	export let asChild: $$Props["asChild"] = false;

	const {
		helpers: { isDateDisabled, isDateUnavailable }
	} = getCtx();

	$: attrs = {
		...getAttrs("cell"),
		"aria-disabled": $isDateDisabled(date) || $isDateUnavailable(date),
		role: "gridcell"
	};
</script>

{#if asChild}
	<slot {attrs} />
{:else}
	<td {...$$restProps} {...attrs}>
		<slot {attrs} />
	</td>
{/if}
