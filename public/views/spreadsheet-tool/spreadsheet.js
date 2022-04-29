var columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
];

var rowData =[
    {make: 'Dodge', model: 'Challenger', price: 37000},
    {make: 'Ford', model: 'Mustang', price: 36000},
    {make: 'Chevy', model: 'Camaro', price: 34000},
];

var gridOptions ={
    columnDefs: columnDefs,
    rowData: rowData
}

var eGridDiv = document.querySelector('#myGrid');

new agGrid.Grid(eGridDiv, gridOptions);