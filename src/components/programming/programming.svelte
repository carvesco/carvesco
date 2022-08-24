<script>
	// @ts-nocheck
	import { scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import ProgrammingItem from './programmingItem/programmingItem.svelte';
	let progSize = '80%';
	let progVisible = false;
	let y = 0;
	$: xpos = y;
	$: if (xpos < 1050) {
		progVisible = false;
	}
</script>

<svelte:window bind:scrollY={y} />
<div class="flex  justify-end">
	<div
		style="position: relative; left: {xpos > 1050 ? 0 : (1050 - xpos).toString() + 'px'}"
		on:click={(e) => {
			progVisible = !progVisible;
		}}
		on:mouseleave={(e) => {
			progSize = '80%';
		}}
		on:mouseenter={(e) => {
			progSize = '90%';
		}}
		class="bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-l-full border-double border-y-8 border-dark-blue"
	>
		<img width={progSize} src="images/Programming.png" alt="Education title" href="/" />
	</div>
</div>
{#if progVisible}
	<div in:scale={{ duration: 1000 ,easing: quintOut,start:0.5}} out:scale={{ duration: 1000,easing: quintOut, start:0.5 }}>
		<ProgrammingItem />
	</div>
{/if}
