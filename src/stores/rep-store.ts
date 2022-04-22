import { writable } from 'svelte/store';

export type SalesRep = {
  rep_name: string;
  territories: string[];
  sales_team: string[];
  otd_pct: string | number;
  dir_pcts: unknown;
  base_salary: number;
  monthly_draw: number;
};

export const currentRep = writable<SalesRep>({
  rep_name: 'House Account',
  territories: ['1014'],
  sales_team: ['IIT', 'SAT'],
  otd_pct: 1.00,
  dir_pcts: {ALL: 1.00},
  base_salary: 0,
  monthly_draw: 0
});