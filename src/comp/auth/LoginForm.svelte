<script lang="ts">
	import { user } from '$lib/stores';
	import { login, logout, signUp } from '$lib/auth';
	import FormLabel from '$comp/forms/FormLabel.svelte';
	let username: string;
	let password: string;
	function keypressLogin(e: KeyboardEvent) {
		if (e.key == 'Enter') login(username, password);
	}
</script>

<div class="flex-col justify-center items-center gap-2 max-w-sm">
	{#if $user}
		<div class="text-2xl flex-row gap-3">
			Signed in as {$user.username}
			<button class="btn-style px-2 text-sm" on:click={logout}>Logout</button>
		</div>
	{:else}
		<FormLabel label="Username">
			<input class="input" bind:value={username} />
		</FormLabel>
		<FormLabel label="Password">
			<input class="input" bind:value={password} type="password" on:keypress={keypressLogin} />
		</FormLabel>
		<div class="grid grid-cols-2 w-full gap-5">
			<button class="btn" on:click={() => signUp(username, password)}>Sign up</button>
			<button class="btn" on:click={() => login(username, password)}>Login</button>
		</div>
	{/if}
</div>

<style>
</style>