<script>
	import Nav from '../components/nav/nav.svelte';
	import '../app.css';
</script>

<body>
	<div class="p-6  mx-auto  bg-dark-blue">
		<Nav />
	</div>

	<div class="h-[100%]   bg-light-pink">
		<slot />
	</div>
</body>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
