<script>
	// @ts-nocheck

	import { draw, fade } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let skl;
    export let indx;
    let exp;
    const index = indx+1;
    if (skl.skill ===3){
        exp=45;
    }else if (skl.skill ===2){
        exp=25;
    }else{
        exp=10;
    }
    console.log(exp);
</script>

<div class="flex flex-row w-4/5 m-auto mt-4">
	<h1
		in:fly={{ duration: 2000, easing: quintOut, y: 300*index }}
		out:fly={{ duration: 2000, easing: quintOut, delay: 1000, y: 100*index }}
		class="mx-4 text-2xl text-dark-blue text-center  m-auto w-[12%]"
	>
		{skl.title}
	</h1>
	<svg width="80%" height="60px" viewBox="23 -0.9 3 3" xmlns="http://www.w3.org/2000/svg" class="">
		<path
			in:draw={{ duration: 500, easing: quintOut, delay: 500*index }}
            out:draw={{ duration: 500, easing: quintOut, delay: 1500/index }}
			d="M 0 0 H {exp} C {exp+1} 0 {exp+1} 1 {exp} 1 H 0 Z"
			fill="none"
			stroke="#0b4abd"
			stroke-width="1px"
		/>
		<path
			in:draw={{ duration: 500, easing: quintOut, delay: 500*index }}
			out:draw={{ duration: 500, easing: quintOut, delay: 1500/index }}
            d="M 0.6 -0.4 H {exp} C {exp+1.6} -0.4 {exp+1.6} 1.6 {exp} 1.6 H 0.6  Z"
			fill="none"
			stroke="#93c8c4"
			stroke-width="0.2px"
		/>
	</svg>
</div>
