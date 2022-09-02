<template lang="pug">
.primary
  main(class="container mx-auto py-4 min-h-screen bg-background flex flex-col items-center")
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
