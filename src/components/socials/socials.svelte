<script>
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import { onMount } from 'svelte';
	let gh = 'images/Githubcoin1.png';
	let ln = 'images/Linkedincoin1.png';
	// @ts-ignore
	function hanldeMouseOverGH(e) {
		gh = 'images/Githubcoin.gif';
	}
	// @ts-ignore
	function hanldeMouseOutGH(e) {
		gh = 'images/Githubcoin1.png';
	}
	// @ts-ignore
	function hanldeMouseOverLN(e) {
		ln = 'images/Linkedincoin.gif';
	}
	// @ts-ignore
	function hanldeMouseOutLN(e) {
		ln = 'images/Linkedincoin1.png';
	}
</script>

<div />
<div class="w-3/4 m-auto mt-6">
	<img class="h-[70px] m-auto" src="images/Socials.png" alt="Socials title" href="/" />
	<div class="flex flex-row w-2/6 justify-around m-auto mt-5">
		<a href="https://www.linkedin.com/in/carvesco/" target="_blank">
			<img
				on:mouseenter={hanldeMouseOverGH}
				on:mouseleave={hanldeMouseOutGH}
				class="h-[60px] cursor-pointer"
				src={gh}
				alt="ghcoin"
			/>
		</a>
		<a href="https://github.com/carvesco" target="_blank">
			<img
				on:mouseenter={hanldeMouseOverLN}
				on:mouseleave={hanldeMouseOutLN}
				class="h-[60px] cursor-pointer"
				src={ln}
				alt="lncoin"
				href="/"
			/></a
		>
	</div>
</div>
