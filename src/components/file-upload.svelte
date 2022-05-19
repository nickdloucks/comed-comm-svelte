<script lang="ts">
    import {promises as fsPromises} from 'fs';
    import type {TRACINGS_TYPE} from '../utilities/types/comedical-types'
    export let salesType: TRACINGS_TYPE;

</script>

<form class="sales-upload">
    <label for={salesType.concat('-tracings-upload')}>Upload {salesType} Sales Tracings: &nbsp;</label>
    <input class="neutral-button" id={salesType.concat('-tracings-upload')} name={salesType.concat('-tracings-upload')} type="file" accept=".csv .xlsx">
</form>

<style>
    label{
        font-weight: bold;
    }
    .sales-upload{
        width: max-content;
    }
</style>