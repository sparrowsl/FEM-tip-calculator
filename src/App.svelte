<script>
  import Bill from './lib/components/Bill.svelte';
  import NumberOfPeople from './lib/components/NumberOfPeople.svelte';
  import Output from './lib/components/Output.svelte';
  import SelectTip from './lib/components/SelectTip.svelte';
</script>

<header class="grid min-h-[10vh] place-content-center">
  <h1 class="text-center font-bold uppercase">Spli<br />tter</h1>
</header>

<main class="font-space_mono min-h-[90vh] rounded-t-3xl bg-white p-6">
  <Bill />
  <SelectTip />
  <NumberOfPeople />
  <Output />
</main>
