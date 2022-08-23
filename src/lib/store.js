import { writable } from 'svelte/store';

export let selectedTip = writable(0); // in %
export let totalBill = writable(0);
export let tipAmount = writable(0);
export let totalPerPerson = writable(0);
export let numberOfPeople = writable(1);
