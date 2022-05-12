<script lang="ts">
    import { currentRep } from '../stores/rep-store';
    import RepSelect from './rep-select.svelte';
    import MfrPctInput from './mfr-pct-input.svelte';
    
    const update_territories = function(val: unknown): void{
        $currentRep.territories
        console.log(`territories updated to ${$currentRep.territories}`);
    }

    const saveRep = function(): void{
        // TODO: update the rep's configs in salesrReps.json, using the values from repStore
        // these will reflect any changes made by the admin user
    }



    // let mfr_input_id: string;
    // const getInputNode = function(id: string): HTMLElement | null{
    //     return document.getElementById(id);
    // }
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
            {#each Object.keys($currentRep.dir_pcts) as mfr}
                <li class="mfr-list-item">
                    <label class="mfr-label" for={mfr.concat('-list-item')}>{mfr.concat(': ')}</label> 
                    <svelte:component 
                        this={MfrPctInput}
                        name={mfr.concat('-input')}></svelte:component>&nbsp; %
                </li>
            {/each}
        </ul>
        <button class="good-button" on:click={saveRep}>Save Changes</button>
    </section>
</main>

<style>

    section{
        background-image: linear-gradient(45deg, var(--nick-lt-blue), var(--nick-dull-silver));
    }
    .mfr-list{
        width: min-content;
        height: min-content;
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
        width: 40px;
        display: inline-block;
        
    }    



</style>

