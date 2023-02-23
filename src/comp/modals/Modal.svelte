<script lang="ts">
  import { faMultiply } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";
  import { fade, fly } from "svelte/transition";
  export let title: string | null = null;
  export let show = false;
  export let bodyClass = "bg-black border-4 border-white m-5";
  export let size: "" | "max-w-xs" |"max-w-sm" | "max-w-md" | "max-w-lg" = "";
  function close() {
    show = false;
  }
</script>

{#if show}
  <div class="modal">
    <div
      class={`modal-body ${size == '' ? '' : 'w-full ' + size} ${bodyClass}`}
      transition:fly|local={{ y: -50 }}
    >
      {#if title}
        <div class="modal-title">
          <div class="modal-close" />
          <div class="h1 text-2xl">{title}</div>
          <button class="modal-close" on:click={close}>
            <Fa icon={faMultiply} />
          </button>
        </div>
      {/if}
      <slot />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal-backdrop" transition:fade|local on:click={close} />
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
  .modal-backdrop {
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: #00000099;
    z-index: -1;
  }
  .modal-body {
    @apply rounded-xl p-3;
  }
  .modal-title {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-center;
    font-size: larger;
    margin-bottom: 1rem;
  }
  .modal-close {
    padding: 0;
    width: 20px;
  }
</style>