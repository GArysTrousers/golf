<script>
	import '../app.css';
	import LoginForm from '$comp/auth/LoginForm.svelte';
	import { user } from '$lib/stores';
	import { FlatToast, ToastContainer } from 'svelte-toasts';
	import { logout } from '$lib/auth';
</script>

{#if $user}
	<button on:click={logout}>Logout</button>
	<slot />
{:else}
	<div class="flex-center">
		<LoginForm />
	</div>
{/if}
<ToastContainer placement="bottom-right" let:data>
	<FlatToast {data} />
</ToastContainer>
