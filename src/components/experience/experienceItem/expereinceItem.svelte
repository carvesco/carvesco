<script>
// @ts-nocheck

	import ExperienceSubItem from './experienceSubItem/experienceSubItem.svelte';
    export let xp;
    console.log(xp);
</script>

<div class="w-4/5 m-auto mt-7">
	<div class="flex flex-row items-center justify-start">
		<img class="h-[60px] " src="images/Arrow.png" alt="arrow" href="/" />
		<h1 class="text-5xl text-dark-blue mb-2">{xp.title}</h1>
	</div>
	<div class="ml-[5%] mt-5">
		<ExperienceSubItem exText={xp.exp[0]}/>
        <ExperienceSubItem exText={xp.exp[1]}/>
        <ExperienceSubItem exText={xp.exp[2]}/>
	</div>
</div>
