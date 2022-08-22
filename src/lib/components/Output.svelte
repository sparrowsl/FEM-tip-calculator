<script>
  import { tipAmount, totalPerPerson } from '../store.js';
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
    <span class="text-strong_cyan text-2xl font-bold">%{$tipAmount}</span>
  </div>

  <div class="flex items-center justify-between">
    <p class="flex flex-col font-bold">
      <span class="text-sm text-white">Total</span>
      <span class="text-grayish_cyan text-xs">/ person</span>
    </p>
    <!-- amount of total bill for all person -->
    <span class="text-strong_cyan text-2xl font-bold">%{$totalPerPerson}</span>
  </div>

  <!-- reset button -->
  <button
    disabled
    type="reset"
    class="text-very_dark_cyan bg-strong_cyan mt-auto block w-full rounded-md
      p-2 text-lg font-bold capitalize disabled:cursor-not-allowed"
  >
    reset
  </button>
</section>
