<script>
  import Bill from './lib/components/Bill.svelte';
  import NumberOfPeople from './lib/components/NumberOfPeople.svelte';
  import Output from './lib/components/Output.svelte';
  import SelectTip from './lib/components/SelectTip.svelte';
</script>

<div class="md:grid md:min-h-screen md:place-content-center">
  <header class="grid min-h-[10vh] place-content-center">
    <h1
      class="font-space_mono text-very_dark_cyan text-center font-bold uppercase"
    >
      Spli<br />tter
    </h1>
  </header>

  <main
    class="font-space_mono flex min-h-[90vh] flex-col justify-evenly rounded-t-3xl
    bg-white p-6 md:min-h-fit md:flex-row md:gap-4 md:rounded-3xl"
  >
    <span>
      <Bill />
      <SelectTip />
      <NumberOfPeople />
    </span>
    <!-- The output that displays the bill -->
    <Output />
  </main>
</div>
