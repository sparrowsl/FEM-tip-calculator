<script>
  import { numberOfPeople } from '../store.js';
</script>

<div>
  <form action="">
    <label for="" class="text-grayish_cyan mb-2 block text-sm font-bold">
      Number of People
    </label>
    <input
      type="text"
      bind:value={$numberOfPeople}
      class="bg-very_light_grayish_cyan w-full rounded-sm px-4 py-2 text-right font-bold"
    />
  </form>
</div>
