<script lang="ts">
	import Loading from '$comp/async/Loading.svelte';
	import FormLabel from '$comp/forms/FormLabel.svelte';
	import ScoreTable from '$comp/stats/ScoreTable.svelte';
	import { pb, user } from '$lib/stores';
	import type { Club, Course, Score } from '$types/data';
	import { faAngleDoubleLeft, faAngleDoubleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import Fa from 'svelte-fa/src/fa.svelte';

	interface ClubCourses extends Club {
		expand: {
			'courses(club)': Course[];
		};
	}
	let courseNum = ['1st', '2nd', '3rd', '4th'];

	let clubs: ClubCourses[];
	let selectedClubId: string;
	$: selectedClub = clubs && selectedClubId ? clubs.find((v) => v.id == selectedClubId) : null;
	let selectedCourse: Course;

	onMount(async () => {
		clubs = await pb.collection('clubs').getFullList<ClubCourses>({
			expand: 'courses(club)'
		});
	});
</script>

<main class="flex-col items-center gap-5">
	<div class="flex-col max-w-xs w-full gap-3">
		{#if clubs && $user}
			<select bind:value={selectedClubId} class="input">
				{#each clubs as club}
					<option value={club.id}>{club.name}</option>
				{/each}
			</select>
			{#if selectedClub}
				<div class="flex-row justify-between gap-3">
					{#each selectedClub.expand['courses(club)'] as course, i}
						<button
							on:click={() => (selectedCourse = course)}
							class="text-center flex-center flex-col w-full border-4 rounded-2xl"
						>
							<div class="flex-row items-center gap-1 text-xl">
								{#if selectedCourse && selectedCourse.id == course.id}
									<Fa icon={faAngleDoubleRight} />
									{courseNum[i]}
									<Fa icon={faAngleDoubleLeft} />
								{:else}
									{courseNum[i]}
								{/if}
							</div>
						</button>
					{/each}
				</div>
				{#if selectedCourse}
					{#await pb
						.collection('scores')
						.getList( 1, 10, { filter: `user = '${$user.id}' && course = '${selectedCourse.id}'`, sort: 'created' } )}
						<Loading />
					{:then scores}
						<ScoreTable course={selectedCourse} scores={scores.items} />
					{:catch error}
						<div>Error</div>
					{/await}
				{/if}
			{/if}
		{:else}
			<Loading />
		{/if}
	</div>
</main>

<style>
</style>
