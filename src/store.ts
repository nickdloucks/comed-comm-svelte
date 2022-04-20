import { writable } from 'svelte/store';

export type SalesRep = {
  rep_name: string;
  territories: string[];
  sales_team: string[];
  otd_pct: number | string;
  dir_pcts: object;
  base_salary: number;
  monthly_draw: number;
};


let allReps;

// export let focusRepName: string = 'house-account'; // default info for focus sales rep. changes to name of rep when selecting a different rep


export const repData = fetch('../fs_db/commission_configs/sales-reps.json') // call this fetch function when logging back into admin portal??
  .then(response =>{ // get the JSON file storing all the profile data for each sales rep
    return response.json(); // return a Javascript object from the JSON data
  }).then(data =>{
    allReps = data["sales_reps"];
    console.log(repData);
    console.log(allReps["erin-collins"]);
});

// export let repStore = writable<Array<SalesRep>>();





  // rep_name = data.rep_name; 
  //         territories = data.; 
  //         sales_team = data.territories; 
  //         dir_pcts = data.dir_pcts; 
  //         base_salary = data.base_salary; 
  //         monthly_draw = data.monthly_draw;