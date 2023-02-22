<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte'
  import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
	import Loading from '$comp/async/Loading.svelte';
	import AppButton from '$comp/buttons/AppButton.svelte';
	import FormLabel from '$comp/forms/FormLabel.svelte';
	import { pb } from '$lib/stores';
	import type { Club, Course } from '$types/data';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	interface CourseClub extends Course {
		expand: {
			club: Club;
		};
	}

	export let data: PageData;
	let course: CourseClub;
	let score: number[] = newScore();
	onMount(async () => {
		course = await pb
			.collection('courses')
			.getOne<CourseClub>(data.courseId, { expand: 'club', sort: 'courseNumber' });
	});

	function newScore() {
		return [0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
</script>

<main class="flex-col items-center gap-5">
	<div class="flex-col max-w-sm w-full gap-5">
		{#if course}
			<div class="text-center">
				<h1 class="h text-3xl">{course.expand.club.name}</h1>
				<h2 class="h text-2xl">{course.name}</h2>
			</div>

			<table class="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Par</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{#each course.par as par, holeIndex}
						<tr>
							<td>{(holeIndex + 1) * course.courseNumber}</td>
							<td>{par}</td>
							<td>
								<div class="flex-row justify-center">
									<button class="btn-score" on:click={()=> score[holeIndex] -= 1}>&minus;</button>
									<input type="number" bind:value={score[holeIndex]} />
									<button class="btn-score" on:click={()=> score[holeIndex] += 1}>&plus;</button>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
      <button class="btn h text-2xl">Submit <Fa icon={faPaperPlane}/></button>
		{:else}
			<Loading />
		{/if}
	</div>

</main>

<style>
	.table {
		@apply border-2;
	}

	.table td,
	.table th {
		font-family: Pacifico, cursive;
		@apply text-center border-2 w-1/4 text-lg;
	}

  input[type='number'] {
    @apply w-20 bg-black text-white text-center;
  }

  .btn-score {
    @apply w-10;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
