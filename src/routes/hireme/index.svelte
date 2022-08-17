<script>
	import Inpt from '../../components/inpt/inpt.svelte';
	import { sineInOut } from 'svelte/easing';
	import fadeScale from '../../components/transitions/fade-scale';
</script>

<div class="h-screen">
	<div class="w-2/5  m-auto ">
		<img in:fadeScale={{delay:250,duration:1500,easing:sineInOut,baseScale:0.4}}  src="images/contact.png" alt="contact title" href="/" class=" m-auto w-[400PX] pt-[50px] pb-[50px]"  />
		<Inpt typ={true} titl={'name'} />
		<Inpt typ={true} titl={'email'} />
		<Inpt typ={false} titl={'message'} />
	</div>
</div>
