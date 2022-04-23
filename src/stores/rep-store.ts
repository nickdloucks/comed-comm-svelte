import { writable } from 'svelte/store';
import type { MFR_pct } from './manufacturers-store';
import { IIT_pcts, SAT_pcts } from './manufacturers-store';

export type SalesRep = {
  rep_name: string;
  territories: string[];
  sales_team: string[];
  otd_pct: string | number;
  dir_pcts: Array<MFR_pct>;
  base_salary: number;
  monthly_draw: number;
};

export const currentRep = writable<SalesRep>({
  rep_name: 'House Account',
  territories: ['1020', '1021'],
  sales_team: ['IIT', 'SAT'],
  otd_pct: 1.00,
  dir_pcts: [...IIT_pcts, ...SAT_pcts],
  base_salary: 0,
  monthly_draw: 0
});