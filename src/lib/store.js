import { writable } from 'svelte/store';

export let selectedTip = writable(15); // in %
export let totalBill = writable(142.55);
export let tipAmount = writable(4.27);
// export let customTip = writable(0);
export let totalPerPerson = writable(32.79);
export let numberOfPeople = writable(5);
