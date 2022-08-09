<script>
	// @ts-nocheck
	import { fade, fly } from 'svelte/transition';
	import ExpereinceItem from './experienceItem/expereinceItem.svelte';
	import exp from '../../data/experience.json';
	//console.log(exp.experience);
	let exSize = '80%';
	let expVisible = false;
	let y;
</script>

<svelte:window bind:scrollY={y} />
<h2>{y}</h2>
{#if y > 65}
	<div
		on:click={(e) => {
			expVisible = !expVisible;
		}}
		on:mouseleave={(e) => {
			exSize = '80%';
		}}
		on:mouseenter={(e) => {
			exSize = '90%';
		}}
		class="bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-r-full animate__animated animate__fadeInLeftBig"
	>
		<img width={exSize} src="images/Experience.png" alt="Experience title" href="/" />
	</div>
{/if}

{#if expVisible}
	<div in:fly={{ y: -100 }} out:fly={{ y: -100 }}>
		<ExpereinceItem xp={exp.experience[0]} />
		<ExpereinceItem xp={exp.experience[1]} />
	</div>
{/if}
