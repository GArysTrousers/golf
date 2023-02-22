<script lang="ts">
	import AppButton from "$comp/buttons/AppButton.svelte";
  import { faPlus, faChartLine } from "@fortawesome/free-solid-svg-icons";

</script>

<main class="flex-col items-center gap-5">
	<h1 class="h text-4xl mb-5">Golf</h1>
  <div class="grid grid-cols-2 gap-3">
    <AppButton icon={faPlus} text="New Game" href="/new"/>
    <AppButton icon={faChartLine} text="View Stats" href="/stats"/>
  </div>
</main>

<style>
</style>
