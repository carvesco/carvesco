<script>
	// @ts-nocheck

	import Skillitem from './skillitem/skillitem.svelte';
	import sk from '../../data/skills.json';
	//console.log(exp.experience);
	let sklSize = '50%';
	let skillVisible = false;
	let y = 0;
	$: if (xpos < 750) {
		skillVisible = false;
	}
	$: xpos = y;
</script>

<svelte:window bind:scrollY={y} />
<div
	style="position: relative; right: {xpos > 750 ? 0 : (750 - xpos).toString() + 'px'};"
	on:click={(e) => {
		skillVisible = !skillVisible;
	}}
	on:mouseleave={(e) => {
		sklSize = '50%';
	}}
	on:mouseenter={(e) => {
		sklSize = '60%';
	}}
	class="bg-main-grey w-2/5 h-[150px] cursor-pointer flex justify-center items-center rounded-r-full border-double border-y-8 border-dark-blue"
>
	<img width={sklSize} src="images/Skills.png" alt="Skills title" href="/" />
</div>
{#if skillVisible}
	<div>
		{#each sk as skill, i}
			<Skillitem skl={skill} indx={i} />
		{/each}
	</div>
{/if}
