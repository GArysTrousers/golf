<script lang="ts">
	import AppButton from "$comp/buttons/AppButton.svelte";
  import { faPlus, faChartLine, faTableList } from "@fortawesome/free-solid-svg-icons";

</script>

<main class="flex-col items-center gap-5">
  <div class="grid grid-cols-2 gap-3 max-w-xs w-full">
    <AppButton icon={faPlus} text="New Game" href="/new"/>
    <AppButton icon={faTableList} text="History" href="/history"/>
    <AppButton icon={faChartLine} text="Stats" href="/stats"/>
  </div>
</main>

<style>
</style>
