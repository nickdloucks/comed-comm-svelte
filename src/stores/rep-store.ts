import { writable } from 'svelte/store';
import { IIT_pcts, SAT_pcts } from './manufacturers-store';

export const currentRep = writable<SalesRep>({
  rep_name: 'House Account',
  territories: [],
  sales_team: ['IIT', 'SAT'],
  otd_pct: 1.00,
  dir_pcts: [...IIT_pcts, ...SAT_pcts],
  base_salary: 0,
  monthly_draw: 0
});