<script>
  import Bill from './lib/components/Bill.svelte';
  import NumberOfPeople from './lib/components/NumberOfPeople.svelte';
  import Output from './lib/components/Output.svelte';
  import SelectTip from './lib/components/SelectTip.svelte';
</script>

<div class="md:grid md:min-h-screen md:place-content-center">
  <header class="mb-3 grid min-h-[10vh] place-content-center">
    <h1
      class="font-space_mono text-very_dark_cyan text-center font-bold uppercase md:text-xl"
    >
      Spli<br />tter
    </h1>
  </header>

  <main
    class="font-space_mono flex min-h-[90vh] flex-col justify-evenly rounded-t-3xl bg-white p-6
    md:min-h-fit md:min-w-[600px] md:flex-row md:justify-around md:gap-4 md:rounded-3xl"
  >
    <span class="md:flex md:flex-col md:gap-6">
      <Bill />
      <SelectTip />
      <NumberOfPeople />
    </span>
    <!-- The output that displays the bill -->
    <Output />
  </main>
</div>
