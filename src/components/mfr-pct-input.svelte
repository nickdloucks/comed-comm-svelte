<script lang="ts">
    import {currentRep} from '../stores/rep-store';
    export let name: string;
    export let id: string;
    export let mfr: string;
    export let value: number;

    // TODO: Make current rep a property of the ui config component so that it re-renders with just that rep's data/ mfr list????
    const setMfrPct = function(pct: number = value): void{ // FormEventHandler<HTMLInputElement>  ???
        $currentRep.dir_pcts[mfr] = pct;
    }
</script>

<input 
    name={name} 
    id={id}
    type="number" 
    placeholder={String($currentRep.dir_pcts[mfr])} 
    bind:value={$currentRep.dir_pcts[mfr]}

/>