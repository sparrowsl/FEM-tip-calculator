<script>
  import { totalBill } from '../store.js';
</script>

<div>
  <form action="">
    <label for="" class="text-grayish_cyan block text-sm font-bold">Bill</label>
    <input
      type="text"
      bind:value={$totalBill}
      class="bg-very_light_grayish_cyan text-very_dark_cyan w-full rounded-sm px-4 py-2 text-right font-bold"
    />
  </form>
</div>
