<script>
	// @ts-nocheck

	import Inpt from '../../components/inpt/inpt.svelte';
	import { sineInOut } from 'svelte/easing';
	import fadeScale from '../../components/transitions/fade-scale';
	import { browser } from '$app/env';
	import { writable } from 'svelte/store';
	import Modal from 'svelte-simple-modal';
	import Popup from './Popup.svelte';

	const modal = writable(null);
	const showModal = () => modal.set(Popup);

	let name;
	let email;
	let message;
	let bttn = 'images/SendButton1.png';

	const handleSubmit = async (e) => {
		try {
			let data = JSON.stringify({
				fromaddress: email,
				toaddress: 'carvesco@gmail.com',
				name: name,
				message: message
			});
			//console.log(data)
			//console.log(name,email,message)
			const response = await fetch('https://carvesco-api.herokuapp.com/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: data
			});
			if (response) {
				console.log(response);
				showModal();
			} else {
				console.log('error');
			}
		} catch (er) {
			console.error(er);
		}
	};
</script>

<div class="h-screen">
	<div class="w-2/5  m-auto ">
		<img
			in:fadeScale={{ delay: 250, duration: 1500, easing: sineInOut, baseScale: 0.4 }}
			src="images/contact.png"
			alt="contact title"
			href="/"
			class=" m-auto w-[400PX] pt-[50px] pb-[50px]"
		/>
		<form on:submit|preventDefault={handleSubmit} class="w-full">
			<Inpt typ={true} titl={'name'} bind:value={name} />
			<Inpt typ={true} titl={'email'} bind:value={email} />
			<Inpt typ={false} titl={'message'} bind:value={message} />
			<button type="submit" class="w-full m-auto">
				<img
					on:click={() => {
						bttn = 'images/SendButton2.png';
						setTimeout(() => {
							bttn = 'images/SendButton1.png';
						}, 500);
					}}
					in:fadeScale={{ delay: 250, duration: 1500, easing: sineInOut, baseScale: 0.4 }}
					src={bttn}
					alt="send button"
					href="/"
					class=" w-[400PX] m-auto"
				/></button
			>
		</form>
	</div>
</div>

{#if browser}
	<Modal show={$modal} />
{/if}
