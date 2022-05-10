<script lang="ts">
    import {promises as fsPromises} from 'fs';
    export let salesType: TRACINGS_TYPE;

</script>

<form>
    <label for={salesType.concat('-tracings-upload')}>Upload {salesType} Sales Tracings: &nbsp;</label>
    <input id={salesType.concat('-tracings-upload')} name={salesType.concat('-tracings-upload')} type="file" accept=".csv .xlsx">
</form>