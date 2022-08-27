<template lang="pug">
.primary
  main(class="container py-4")
    slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const primary = defineComponent({
  setup() {
  }
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
