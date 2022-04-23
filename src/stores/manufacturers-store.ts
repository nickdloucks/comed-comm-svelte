import { writable } from 'svelte/store';

let sat_mfrs: string[] = ['GEN', 'MA', 'MET', 'PMBS', 'SCI', 'SKY', 'SPC', 'WEG'];
let iit_mfrs: string[] = ['ARG', 'AXI', 'CON', 'MED', 'MRT', 'NOZ', 'TID', 'RAD'];

export type MFR_pct = {
    mfr_id: string;
    pct: number;
}
export let IIT_pcts: Array<MFR_pct> = iit_mfrs.map((mfr): MFR_pct =>{
    let mfrPct:MFR_pct = {mfr_id: mfr, pct: 0.0};
    return mfrPct;
});
export let SAT_pcts: Array<MFR_pct> = sat_mfrs.map((mfr): MFR_pct =>{
    let mfrPct:MFR_pct = {mfr_id: mfr, pct: 0.0};
    return mfrPct;
});