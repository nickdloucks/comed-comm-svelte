<script lang="ts">
    import { currentRep } from '../stores/rep-store';
    import RepSelect from './rep-select.svelte';
    
    const update_territories = function(val: unknown): void{
        $currentRep.territories
        console.log(`territories updated to ${$currentRep.territories}`);
    }

    const saveRep = function(): void{
        // TODO: update the rep's configs in salesrReps.json, using the values from repStore
        // these will reflect any changes made by the admin user
    }

    // TODO: Make current reop a property of the ui config component so that it re-renders with just that rep's data/ mfr list????
</script>

<main>
    <section>
        <svelte:component this={RepSelect} id='repConfigUI-select'/>

        <label for="current-rep">Currently Editing:</label><p name="current-rep">{$currentRep.rep_name}</p>
        
        <h4>{$currentRep.rep_name}</h4>
        <p>Territories:</p>
        {#each $currentRep.territories as territory}
            <!-- <input class='territory-config' type="text" placeholder={territory} value={territory}/><br> -->
        {/each}

        <label for='salary'>Base Salary: &nbsp;</label><input name="salary" type='number' placeholder={'$'.concat(String($currentRep.base_salary))}><br>
        <h5>Direct Sales Commissions % by Manufacturer:</h5>
        
    </section><br>
    <section>
        <ul class="mfr-list">
            {#each $currentRep.dir_pcts as mfr}
                <li class="mfr-list-item">
                    <label class="mfr-label" for={mfr.mfr_id.concat('-list-item')}>{mfr.mfr_id.concat(': ')}</label> 
                    <input name={mfr.mfr_id.concat('-list-item')} type="number" placeholder={String(mfr.pct)}> &nbsp; %
                </li>
            {/each}
        </ul>
        <button class="good-button" on:click={saveRep}>Save Changes</button>
    </section>
</main>

<style>

    section{
        background-image: linear-gradient(245deg, var(--nick-lt-blue), var(--nick-dull-silver));
    }
    .mfr-list{
        background-image: linear-gradient(245deg, var(--nick-lt-blue), var(--nick-dull-silver));
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }
    .mfr-list-item{
        width: max-content;
        font-weight: bold;
    }
    .mfr-label{
        height: min-content;
        width: 35px;
        display: inline-block;
        
    }    



</style>

