<script>
    let repPaths =[];
    // fetch('../../fs_db/commission_configs/sales-reps.json')
    //     .then(response =>{
    //         return response.json();
    //     }).then(data =>{
    //         console.log(data.sales_reps);
    //         repPaths = repPaths.map(data.keys); // NEED TO FIND A WAY TO ADD THE NAMES TO THE ARRAY ABOVE
    //     });
    // const REP_SELECT = document.getElementById('rep-select');



    // REP_SELECT.addEventListener('input',()=>{
    // let repName = REP_SELECT.value;
    // let configFile = new String(repName).concat('.json');
    // let configFilePath = '../fs_db/commission_configs/'.concat(configFile);
    // // console.log(configFilePath);

    // // fetch(configFilePath)
    // //     .then(response =>{
    // //         return response.json();
    // //     })
    // //     .then(data =>{
    // //         currentRepParams = data;
    // //         console.log(data);
    // //         console.log(currentRepParams.rep_name);
    // //     });
    // // });
</script>

<main>
    <label for="sales-rep">Sales Rep.&nbsp;</label>
    <select class="select-box" name="sales-rep" id="rep-select">
        <option value="chris-burbiglia">Chris Burbiglia</option>
        <option value="erin-collins">Erin Collins</option>
        <option value="michael-coyne">Michael Coyne</option>                       
        <option value="molly-dennehey">Molly Dennehey</option>
        <option value="marti-dowdy">Marti Dowdy</option>
        <option value="nick-hagarty">Nick Hagarty</option>
        <option value="ryan-murray">Ryan Murray</option>
        <option value="griff-overturf">Griff Overturf</option>
        <option value="haydon-overturf">Haydon Overturf</option>
        <option value="mike-parker">Mike Parker</option>
        <option value="house-account" selected>House Account</option> <!--default value-->
    </select>
</main>