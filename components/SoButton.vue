<template lang="pug">
button.so-button.px-3.h-10.gap-x-3.button(
  @click.stop="$emit('click')"
  :class="`${btnMode} ${!disabled || 'pointer-events-none'} ${!block || 'w-full'}`"
  :disabled="disabled"
  :type="type"
)
  i.text-md(v-if="leading" :class="`ph-${leading}`")
  slot
  i.text-md(v-if="trailing" :class="`ph-${trailing}`")
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';

const SoButton = defineComponent({
  props: {
    size: {
      type: String,
      default: 'md',
    },
    leading: {
      type: String,
      default: '',
    },
    trailing: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    mode: {
      type: String,
    },
  },
  setup(props: any) {
    const btnMode = computed(() => {
      if (props.mode === 'outline') return 'bg-white hover:bg-primary-500 active:bg-primary-500 border border-primary-500 disabled:opacity-50 text-primary-500 hover:text-white'
      return 'bg-primary-400 hover:bg-primary-500 active:bg-primary-500 disabled:opacity-50 text-white'
    });

    return {
      btnMode,
    };
  },
});

export default SoButton;
</script>

<style lang="scss">
.so-button {
  @apply flex items-center justify-center rounded;
  transition: all 200ms ease-in-out;
  &:disabled {
    background: gray;
  }
}
</style>
