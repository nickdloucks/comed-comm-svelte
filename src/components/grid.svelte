<script lang="ts">
    import { Grid } from 'ag-grid-community';
    import 'ag-grid-community/dist/styles/ag-grid.css';
    import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
    let gridOptions = {
    	columnDefs: [
    		{ headerName: 'Make', field: 'make' },
    		{ headerName: 'Model', field: 'model' },
    		{ headerName: 'Price', field: 'price' }
    	],
    	rowData: [
    		{ make: 'Toyota', model: 'Celica', price: 35000 },
    		{ make: 'Ford', model: 'Mondeo', price: 32000 },
    		{ make: 'Porsche', model: 'Boxster', price: 72000 }
    	]
    };
    let eGridDiv = document.querySelector('#myGrid');
    new Grid(eGridDiv as HTMLElement, gridOptions);
</script>

<main>
    <!-- AG-Grid Placeholder: -->
    <div id="myGrid" style="height: 150px; width: 600px" class="ag-theme-alpine"></div>
</main>