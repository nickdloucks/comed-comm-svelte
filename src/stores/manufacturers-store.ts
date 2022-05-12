import { writable } from 'svelte/store';

export let sat_mfrs: string[] = ['GEN', 'MA', 'MET', 'PMBS', 'SCI', 'SKY', 'SPC', 'WEG'];
export let iit_mfrs: string[] = ['ARG', 'AXI', 'CON', 'MED', 'MRT', 'NOZ', 'TID', 'RAD'];

// export let IIT_pcts: Array<MFR_pct> = iit_mfrs.map((mfr): MFR_pct =>{
//     let mfrPct:MFR_pct = {mfr_id: mfr, pct: 0.0};
//     return mfrPct;
// });
// export let SAT_pcts: Array<MFR_pct> = sat_mfrs.map((mfr): MFR_pct =>{
//     let mfrPct:MFR_pct = {mfr_id: mfr, pct: 0.0};
//     return mfrPct;
// });
