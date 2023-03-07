<script>
	import '../app.css';
	import LoginForm from '$comp/auth/LoginForm.svelte';
	import { user } from '$lib/stores';
	import { FlatToast, ToastContainer } from 'svelte-toasts';
	import { logout } from '$lib/auth';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Modal from '$comp/modals/Modal.svelte';

	let showMenu = false;
</script>

{#if $user}
	<div class="m-3">
		<div class="flex-col items-center py-5">
			<div class="flex-row justify-between items-center max-w-xs w-full">
				<a class="h text-4xl mb-5" href="/">Golf.</a>
				<button on:click={() => (showMenu = true)} class="btn-style w-10 h-10">
					<Fa icon={faBars} class="text-2xl" />
				</button>
			</div>
		</div>

		<slot />
	</div>
	<Modal bind:show={showMenu}>
		<div class="flex-col gap-3">
			<div class="">Signed in as {$user.username}</div>
			<button
				on:click={() => {
					logout();
					showMenu = false;
				}}
				>Logout
			</button>
		</div>
	</Modal>
{:else}
	<div class="flex-center flex-col my-5">
		<h1 class="h text-5xl mb-5">Golf.</h1>
		<LoginForm />
	</div>
{/if}
<ToastContainer placement="top-center" let:data>
	<FlatToast {data} />
</ToastContainer>
