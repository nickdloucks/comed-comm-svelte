<script lang="ts">
	import Upload from './components/file-upload.svelte';
	import { currentRep } from './stores/rep-store';
	import RepSelect from './components/rep-select.svelte';
	import ExcelDisplay from './components/grid.svelte';

</script>

<main>
	<svelte:component this={Upload} salesType='Out-the-Door'></svelte:component>
	<svelte:component this={Upload} salesType='Direct'></svelte:component>
	<svelte:component this={RepSelect}/>
	<svelte:component this={ExcelDisplay}/>
	Name of current rep in Rep Store: {$currentRep.rep_name} 

	<a class="good-button generate-button" href="../fs_db/statements/region-20_2022-04.html">Generate Statement</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.generate-button{
		display: inline-block;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>