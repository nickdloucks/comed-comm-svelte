// import { writable } from 'svelte/store';
import {All_pcts, IIT_pcts, SAT_pcts} from '../utilities/types/comedical-types';

export let sat_mfrs: string[] = ['GEN', 'MA', 'MET', 'PMBS', 'SCI', 'SKY', 'SPC', 'WEG'];
export let iit_mfrs: string[] = ['ARG', 'AXI', 'CON', 'MED', 'MRT', 'NOZ', 'TID', 'RAD'];

export let SAT_instance = new SAT_pcts(sat_mfrs);
export let IIT_instance = new IIT_pcts(iit_mfrs);
export let All_mfr_instance = new All_pcts([...iit_mfrs, ...sat_mfrs])

// export let IIT_pcts: Array<MFR_pct> = iit_mfrs.map((mfr): MFR_pct =>{
//     let mfrPct:MFR_pct = {mfr_id: mfr, pct: 0.0};
//     return mfrPct;
// });
// export let SAT_pcts: Array<MFR_pct> = sat_mfrs.map((mfr): MFR_pct =>{
//     let mfrPct:MFR_pct = {mfr_id: mfr, pct: 0.0};
//     return mfrPct;
// });
