<script lang="ts">
    import { currentRep } from '../stores/rep-store';
    // import RepSelect from './rep-select.svelte';
    
    const update_territories = function(val: unknown): void{
        $currentRep.territories
        console.log(`territories updated to ${$currentRep.territories}`);
    }
</script>

<section>
    <!-- <svelte:component this={RepSelect} id='repConfigUI-select'/> -->
    <h4>{$currentRep.rep_name}</h4>
    <p>Territories:</p>
    {#each $currentRep.territories as territory}
        <input class='territory-config' type="text" placeholder={territory} value={territory}/><br>
    {/each}
    <label for='salary'>OTD %</label><input name="salary" type='number' placeholder={'$'.concat(String($currentRep.base_salary))}><br>
    <p>DIR %</p>
    <ul>
        {#each $currentRep.dir_pcts as mfr}
            <li>{mfr.mfr_id}: &nbsp; {mfr.pct}%</li>
        {/each}
    </ul>
</section>

<style>
    .territory-config{
        width: fit-content;
        color: #8b0000;
    }
</style>

