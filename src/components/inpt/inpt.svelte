<script>
	// @ts-nocheck
	import { sineInOut } from 'svelte/easing';
	import fadeScale from '../transitions/fade-scale';
	export let typ;
	export let titl;
</script>

<div in:fadeScale={{delay:250,duration:1500,easing:sineInOut,baseScale:0.4}} class="w-3/4 flex flex-col items-center m-auto mb-3" >
	{#if typ}
		<input
			class="w-full h-8 text-xl bg-light-blue rounded-md border-solid caret-main-grey border-main-grey caret-red-90 text-main-grey focus:border-solid focus:border-[2px] focus:outline-none placeholder:italic  placeholder:text-xl placeholder:text-light-pink"
			placeholder={titl}
		/>
	{:else}
		<textarea
			class="w-full h-48 text-xl bg-light-blue rounded-md border-solid caret-main-grey border-main-grey caret-red-90 text-main-grey focus:border-solid focus:border-[2px] focus:outline-none placeholder:italic placeholder:text-xl placeholder:text-light-pink"
			placeholder={titl}
		/>
	{/if}
</div>
