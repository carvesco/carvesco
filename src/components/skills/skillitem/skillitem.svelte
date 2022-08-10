<script>
	// @ts-nocheck

	import { draw, fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let skl;
	export let indx;
	let exp;
	let innerWidth = 0;
	$: wdt = innerWidth;
	const index = indx + 1;
	if (skl.skill === 3) {
		exp = 0.572;
	} else if (skl.skill === 2) {
		exp = 0.38177;
	} else {
		exp = 0.19088;
	}
	console.log(exp);
</script>

<svelte:window bind:innerWidth />
<div class="flex flex-row w-4/5 m-auto mt-4">
	<h1
		in:fly={{ duration: 2000, easing: quintOut, y: 300 * index }}
		out:fly={{ duration: 2000, easing: quintOut, delay: 1000, y: 100 * index }}
		class="mx-4 text-2xl text-dark-blue text-center  m-auto w-[12%]"
	>
		{skl.title}
	</h1>
	<svg width="80%" height="60px" xmlns="http://www.w3.org/2000/svg" class="pt-[10px]">
		<path
			in:draw={{ duration: 500, easing: quintOut, delay: 500 * index }}
			out:draw={{ duration: 500, easing: quintOut, delay: 1500 / index }}
			d="M 11 11 H {exp * wdt-22} C {exp * wdt + 20} 11 {exp * wdt + 20} 25 {exp *  wdt-22} 25 H 11 Z"
			fill="none"
			stroke="#0b4abd"
			stroke-width="16px"
		/>
		<path
			in:draw={{ duration: 500, easing: quintOut, delay: 500 * index }}
			out:draw={{ duration: 500, easing: quintOut, delay: 1500 / index }}
			d="M 5 5 H {exp * wdt} C {exp * wdt + 20} 5 {exp * wdt + 20} 30 {exp * wdt} 30 H 5 Z"
			fill="none"
			stroke="#93c8c4"
			stroke-width="5px"
		/>
	</svg>
</div>
