<script lang="ts">
    import { currentRep } from '../stores/rep-store';
    // import RepSelect from './rep-select.svelte';
    
    const update_territories = function(val: unknown): void{
        $currentRep.territories
        console.log(`territories updated to ${$currentRep.territories}`);
    }

    const saveRep = function(): void{
        // TODO: update the rep's configs in salesrReps.json, using the values from repStore
        // these will reflect any changes made by the admin user
    }
</script>

<section>
    <!-- <svelte:component this={RepSelect} id='repConfigUI-select'/> -->
    <h4>{$currentRep.rep_name}</h4>
    <p>Territories:</p>
    {#each $currentRep.territories as territory}
        <input class='territory-config' type="text" placeholder={territory} value={territory}/><br>
    {/each}
    <label for='salary'>Base Salary: &nbsp;</label><input name="salary" type='number' placeholder={'$'.concat(String($currentRep.base_salary))}><br>
    <p>DIR %</p>
    <ul>
        {#each $currentRep.dir_pcts as mfr}
            <li>{mfr.mfr_id}: &nbsp; {mfr.pct}%</li>
        {/each}
    </ul>
    <button class="good-button" on:click={saveRep}>Save Changes</button>
</section>

<style>
    .territory-config{
        width: fit-content;
        color: #8b0000;
    }
    ul{
        list-style-type: none;
    }
</style>

