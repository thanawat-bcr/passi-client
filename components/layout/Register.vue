<template lang="pug">
.primary.container
  .flex.items-start.gap-x-3
    img.w-12.h-12(src="/logo.png")
    h2.text-left.text-primary-500 Register
  .flex.items-center.gap-x-2.mt-4
    .flex-1(v-for="(step, index) in steps")
      .text-sm(:class="`${current >= index ? 'text-primary-400' : 'text-gray-200'}`") {{ step }}
      .h-1(:class="`${current >= index ? 'bg-primary-400' : 'bg-gray-300'}`")
  main.mt-8.px-4
    slot
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const primary = defineComponent({
  props: {
    current: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const steps = ref(['QR CODE', 'FACE VERIFY', 'EMAIL', 'PIN'])

    return {
      steps
    }
  }
});

export default primary;
</script>

<style lang="scss">
// .primary {}
</style>
