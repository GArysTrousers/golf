<script lang="ts">
	import type { Course, Score } from '$types/data';
	import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa/src/fa.svelte';

	export let course: Course;
	export let scores: Score[];
</script>

<table class="table">
	<thead>
		<tr>
			<th>#</th>
			{#each course.par as stroke, i}
				<th>{i + 1 + (course.courseNumber - 1) * 9}</th>
			{/each}
      <th>T</th>
		</tr>
    <tr>
			<td>Par</td>
			{#each course.par as stroke}
				<td>{stroke}</td>
			{/each}
      <td>{course.par.reduce((a, b) => a + b)}</td>
		</tr>
    <tr><td colspan="11"></td></tr>
	</thead>
	<tbody>
		{#each scores as score, i}
			<tr>
				<td>{score.created.substring(5, 10)}</td>
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
