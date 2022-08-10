<script>
	import Nav from '../components/nav/nav.svelte';
	import '../app.css';
	import { Svrollbar } from 'svrollbar';
</script>


<body>
	<div class="container">
	</div>
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
	::-webkit-scrollbar {
		display: none;
	}
</style>
