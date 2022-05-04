let columnDefs = [
    // {headerName: 'Make', field: 'make'},
    // {headerName: 'Model', field: 'model'},
    // {headerName: 'Price', field: 'price'},


    { field: 'invoice_date', headerName: 'invoice_date', minWidth: 90 },
    { field: 'ship2_name', headerName: 'ship2_name', minWidth: 100 },
    { field: 'ship2_postal_code', headerName: 'ship2_postal_code', minWidth: 60 },
    { field: 'period', headerName: 'period', minWidth: 30 },
    { field: 'year_for_peroid', headerName: 'year_for_peroid', minWidth: 50 },
    { field: 'qty_shipped', headerName: 'qty_shipped', minWidth: 30},
    { field: 'item_id', headerName: 'item_id' },
    { field: 'extended_price', headerName: 'extended_price' },
    { field: 'commission_cost', headerName: 'commission_cost' },
    { field: 'product_group_id', headerName: 'product_group_id', minWidth: 50 },
    { field: 'salesrep_id', headerName: 'salesrep_id', minWidth: 50 },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },
    // {field: '', headerName: '', },set
    // {field: '', headerName: '', },
    // {field: '', headerName: '', }
];


const gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 80,
        flex: 1
    },
    rowSelection: 'multiple',
    rowData: [
        {fred: '1', make: 'Dodge', model: 'Challenger', price: 37000},
        {fred: '2', make: 'Ford', model: 'Mustang', price: 36000},
        {fred: '3', make: 'Chevy', model: 'Camaro', price: 34000},
    ]
};

var eGridDiv = document.querySelector('#myGrid');

new agGrid.Grid(eGridDiv, gridOptions);