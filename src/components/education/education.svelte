<script>
	// @ts-nocheck
	import { fade, fly } from 'svelte/transition';
	import EducationItem from './educationItem/educationItem.svelte';
	import edu from '../../data/education.json';
	let edSize = '80%';
	let eduVisible = false;
	let y = 0;
	$: xpos = y;
</script>

<svelte:window bind:scrollY={y} />
<div class="flex  justify-end">
	<div
		style="position: relative; left: {xpos > 600 ? 0 :(600 - xpos).toString() + 'px'}"
		on:click={(e) => {
			eduVisible = !eduVisible;
		}}
		on:mouseleave={(e) => {
			edSize = '80%';
		}}
		on:mouseenter={(e) => {
			edSize = '90%';
		}}
		class="bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-l-full border-double border-y-8 border-dark-blue"
	>
		<img width={edSize} src="images/Education.png" alt="Education title" href="/" />
	</div>
</div>
{#if eduVisible}
	<div in:fly={{ y: -100 }} out:fly={{ y: -100 }}>
		<EducationItem ed={edu[0]} />
	</div>
{/if}
