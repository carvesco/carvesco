<script>
	import Footer from '../components/footer/footer.svelte';
	import Education from '../components/education/education.svelte';
	import Experience from '../components/experience/experience.svelte';
	import Socials from '../components/socials/socials.svelte';
	import Title from '../components/title/title.svelte';
	import Skills from '../components/skills/skills.svelte';
</script>

<svelte:head>
	<title>Carvesco</title>
</svelte:head>
<div class="pb-10">
	<div class="w-full h-[700px] bg-main-grey flex">
		<Title />
	</div>
	<div>
		<Socials />
	</div>
	<div class="mt-10">
		<Experience />
	</div>
	<div class="mt-10">
		<Education />
	</div>
	<div class="mt-10">
		<Skills />
	</div>
	<Footer />
</div>
