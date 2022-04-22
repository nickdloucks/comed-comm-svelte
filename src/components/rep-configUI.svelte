<script lang="ts">
    import RepSelect from './rep-select.svelte';
    // SUBSCRIBE TO REP STORE
    let repName: string;
</script>

<section>
    <svelte:component this={RepSelect} id='repConfigUI-select'/>
    <h4>{repName}</h4>

</section>