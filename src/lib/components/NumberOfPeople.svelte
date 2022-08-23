<script>
  import { numberOfPeople } from '../store.js';
</script>

<div>
  <form action="">
    <label
      for=""
      class="text-grayish_cyan mb-2 flex justify-between text-sm font-bold"
    >
      <span>Number of People</span>
      {#if !$numberOfPeople || $numberOfPeople < 1}
        <span class="text-red-400">Can't be zero</span>
      {/if}
    </label>
    <input
      type="number"
      min="0"
      bind:value={$numberOfPeople}
      class="{!$numberOfPeople
        ? 'rounded-md border-2 border-red-400'
        : ''} bg-very_light_grayish_cyan block w-full rounded-sm border
       px-4 py-2 text-right font-bold outline-none"
    />
  </form>
</div>
