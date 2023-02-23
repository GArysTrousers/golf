<script lang="ts">
	import Loading from '$comp/async/Loading.svelte';
	import AppButton from '$comp/buttons/AppButton.svelte';
	import FormLabel from '$comp/forms/FormLabel.svelte';
	import { pb } from '$lib/stores';
	import type { Club, Course } from '$types/data';
	import { onMount } from 'svelte';

	interface ClubCourses extends Club {
		expand: {
			'courses(club)': Course[];
		};
	}
	let courseNum = ['1st', '2nd', '3rd', '4th'];

	let clubs: ClubCourses[];
	let selectedClubId: string;
	$: selectedClub = clubs && selectedClubId ? clubs.find((v) => v.id == selectedClubId) : null;

	onMount(async () => {
		clubs = await pb.collection('clubs').getFullList<ClubCourses>({
			expand: 'courses(club)'
		});
	});
</script>

<main class="flex-col items-center gap-5">
	<div class="flex-col max-w-xs w-full gap-5">
		{#if clubs}
			<FormLabel label="Club">
				<select bind:value={selectedClubId} class="input">
					{#each clubs as club}
						<option value={club.id}>{club.name}</option>
					{/each}
				</select>
			</FormLabel>
			{#if selectedClub}
				<FormLabel label="Course">
					<div class="flex-row justify-center gap-3">
						{#each selectedClub.expand['courses(club)'] as course, i}
							<a
								href={`/new/${course.id}`}
								class="text-center flex-center flex-col w-24 border-4 rounded-2xl aspect-square"
							>
								<div class="text-3xl">{courseNum[i]}</div>
							</a>
						{/each}
					</div>
				</FormLabel>
			{/if}
		{:else}
			<Loading />
		{/if}
	</div>
</main>

<style>
</style>
