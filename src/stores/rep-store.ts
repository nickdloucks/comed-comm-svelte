import type { SalesRep } from 'comedical-types';
import { writable } from 'svelte/store';
import { SAT_instance, IIT_instance, All_mfr_instance } from './manufacturers-store';

export const currentRep = writable<SalesRep>({
  rep_name: 'House Account',
  territories: [],
  sales_team: ['IIT', 'SAT'],
  otd_pct: 1.00,
  dir_pcts: All_mfr_instance, // NEED A WAY TO INDICATE DIFFERENT COMMISSION CLASSES: IIT vs SAT
  base_salary: 0,
  monthly_draw: 0
});