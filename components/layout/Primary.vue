<template lang="pug">
.primary.container.mx-auto.py-6.border
  main.px-4
    slot.flex.flex-col.items-center
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
