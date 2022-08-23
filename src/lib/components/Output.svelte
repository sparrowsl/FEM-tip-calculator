<script>
  import {
    tipAmount,
    totalPerPerson,
    selectedTip,
    numberOfPeople,
    totalBill,
  } from '../store.js';

  const resetValues = () => {
    $tipAmount = 0.0;
    $totalPerPerson = 0.0;
    $totalBill = 0.0;
    $numberOfPeople = 0;
    $selectedTip = 0;
  };

  let newTip = $selectedTip;
  $: console.log($selectedTip);

  $: $tipAmount = Number(
    (($totalBill * (newTip / 100)) / $numberOfPeople).toFixed(2),
  );

  $: $totalPerPerson = Number(($totalBill / $numberOfPeople).toFixed(2));
</script>

<section
  class="bg-very_dark_cyan flex flex-col gap-6 rounded-xl p-6 md:min-w-[250px]"
>
  <div class="flex items-center justify-between">
    <p class="flex flex-col font-bold">
      <span class="text-sm text-white">Tip Amount</span>
      <span class="text-grayish_cyan text-xs">/ person</span>
    </p>
    <!-- amount of tip per person -->
    <span class="text-strong_cyan text-2xl font-bold">
      ${$tipAmount && $tipAmount !== Infinity ? $tipAmount : '0.00'}
    </span>
  </div>

  <div class="flex items-center justify-between">
    <p class="flex flex-col font-bold">
      <span class="text-sm text-white">Total</span>
      <span class="text-grayish_cyan text-xs">/ person</span>
    </p>
    <!-- amount of total bill for all person -->
    <span class="text-strong_cyan text-2xl font-bold">
      ${$totalPerPerson && $totalPerPerson !== Infinity
        ? $totalPerPerson
        : '0.00'}
    </span>
  </div>

  <!-- reset button -->
  <button
    disabled={$tipAmount && $totalPerPerson ? false : true}
    class="text-very_dark_cyan bg-strong_cyan disabled:text-light_grayish_cyan
    disabled:bg-dark_grayish_cyan mt-auto block w-full rounded-md p-2 text-lg
    font-bold capitalize disabled:cursor-not-allowed"
    on:click={resetValues}
  >
    reset
  </button>
</section>
