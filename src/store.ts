import { writable } from 'svelte/store';

type SalesRep = {
  name: string;
  territories: string[];
  admin: boolean;
};

export const repStore = writable<SalesRep>({
  name: 'John Doe',
  territories: ['1014'],
  admin: false,
});