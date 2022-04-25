<script lang="ts">

  import { currentRep } from "./stores/rep-store";
  import RepSelect from './components/rep-select.svelte';
  import RepConfig from './components/rep-configUI.svelte';
  let edit: boolean = false;

	// const RepSelectBox = new RepSelect({
	// 	target: document.getElementById('rep-select-component'),
	// 	props: {
	// 		name: 'world'
	// 	}

	// });

</script>

<main>
	<svelte:component this={RepSelect}/>
	<svelte:component this={RepConfig}/>
Name of current rep in Rep Store: {$currentRep.rep_name} 
  <!-- {#if edit}
    <label for="name">Name:</label>
    <input id="name" type="text" bind:value={$repStore.name} /><br />
    <label for="territories">Territories:</label>
    <input id="territories" type="number" bind:value={$repStore.territories} /><br />
    <label for="admin">Admin:</label>
    <input id="admin" type="checkbox" bind:checked={$repStore.admin} />
  {:else}
    Name: {$repStore.name}<br />
    territories: {$repStore.territories}<br />
    Admin: {$repStore.admin ? "Yes" : "No"}
  {/if} -->
</main>

<button on:click={() => (edit = !edit)}>
  {edit ? "Close" : "Edit"}
</button>


<!-- <script lang="ts">
	export let name: string = 'Julie';
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> -->

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>