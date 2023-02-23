<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faQuestion } from "@fortawesome/free-solid-svg-icons";
  export let icon = faQuestion
  export let text:string
  export let href:string
</script>

<a {href} class="text-center flex-center flex-col w-full border-4 rounded-2xl aspect-square">
  <Fa class="text-5xl" {icon}/>
  <div>{text}</div>
</a>

<style>
  
</style>