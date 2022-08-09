<script>
	// @ts-nocheck
    export let ed;
    console.log(ed);
</script>

<div class="w-4/5 m-auto mt-7 flex  justify-end">
	<div class="flex flex-row-reverse items-center justify-start">
		<img class="h-[60px] " src="images/Book.png" alt="Book" href="/" />
		<div class="">
			<h1 class="text-5xl text-dark-blue mb-2 m-auto">{ed.place}</h1>
			<h1 class="text-3xl text-center text-dark-blue mb-2 max-w-lg m-auto">
				{ed.degree}
			</h1>
			<h1 class="text-2xl text-center text-dark-blue mb-2 max-w-lg m-auto">{ed.location}</h1>
			<h1 class="text-2xl text-center text-dark-blue mb-2 max-w-lg m-auto">{ed.date}</h1>
		</div>
	</div>
</div>
