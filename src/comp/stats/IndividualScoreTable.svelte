<script lang="ts" context="module">
	export interface ScoreExCourseClub extends Score {
		expand: {
			course: CourseExClub;
		};
	}

  export interface CourseExClub extends Course {
		expand: {
			club: Club;
		};
	}
</script>

<script lang="ts">
	import { range } from '$lib/utils';
	import type { Club, Course, Score } from '$types/data';

	export let scores: ScoreExCourseClub[];
</script>

<table class="table">
	<thead>
		<tr>
			<th>Date</th>
			<th>#</th>
			{#each range(9, 1) as hole}
				<th>{hole}</th>
			{/each}
			<th>T</th>
		</tr>
		<tr><td colspan="11" /></tr>
	</thead>
	<tbody>
		{#each scores as score, i}
			<tr>
				<td>{score.created.substring(5, 10)}</td>
        <td title={score.expand.course.expand.club.name}>{score.expand.course.expand.club.shortname}{score.expand.course.courseNumber}</td>
				{#each score.strokes as stroke, i}
					<td>{stroke}</td>
				{/each}
				<td>{score.strokes.reduce((a, b) => a + b)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
</style>
