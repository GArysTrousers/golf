<script lang="ts">
	export let label: string;
  export let pos: "left" | "center" | "right" = "left"
  let positions = {
    "left": "text-left",
    "center": "text-center",
    "right": "text-right"
  }
  export let width: string = "w-full"
</script>

<div class={`flex-col gap-2 ${width}`}>
	<div class={`text-lg ${positions[pos]}`}>{label}</div>
	<slot />
</div>

<style>
</style>