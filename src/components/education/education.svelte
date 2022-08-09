<script>
	// @ts-nocheck
	import { fade, fly } from 'svelte/transition';
	import EducationItem from './educationItem/educationItem.svelte';
	import edu from '../../data/education.json';
	let edSize = '80%';
	let eduVisible = false;
</script>

<div class="flex  justify-end">
	<div
		on:click={(e) => {
			eduVisible = !eduVisible;
		}}
		on:mouseleave={(e) => {
			edSize = '80%';
		}}
		on:mouseenter={(e) => {
			edSize = '90%';
		}}
		class="bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-l-full animate__animated animate__fadeInRightBig"
	>
		<img width={edSize} src="images/Education.png" alt="Education title" href="/" />
	</div>
</div>
{#if eduVisible}
	<div in:fly={{ y: -100 }} out:fly={{ y: -100 }}>
		<EducationItem ed={edu[0]} />
	</div>
{/if}
