<script>
  import { clickedValue } from '../store.js';

  const tipValues = [5, 10, 15, 25, 50];
</script>

<div>
  <h3 class="text-grayish_cyan mb-2 text-sm font-bold capitalize">
    Select Tip %
  </h3>

  <ul class="grid grid-cols-2 gap-3">
    {#each tipValues as tip}
      <li
        on:click={() => ($clickedValue = tip)}
        class="{$clickedValue === tip
          ? 'bg-strong_cyan text-very_dark_cyan'
          : 'bg-very_dark_cyan text-white'} cursor-pointer rounded-md p-2 text-center text-base font-bold"
      >
        {tip}%
      </li>
    {/each}
    <li
      class="bg-very_light_grayish_cyan text-very_dark_cyan rounded-md p-2 text-center text-base font-bold"
    >
      Custom
    </li>
  </ul>
</div>
