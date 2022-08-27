<template lang="pug">
button.so-button(
  @click.stop="$emit('click')"
  :class="`${buttonColor} ${buttonSize.button} ${buttonSize.text} ${!disabled || 'pointer-events-none'} ${!block || 'w-full'}`"
  :disabled="disabled"
  :type="type"
)
  img(v-if="leading === 'google'" src="/logo/google.svg")
  i(v-if="leading !== 'google' && leading" :class="`${buttonIcon} ${buttonSize.icon}`")
  slot
  i(v-if="trailing" :class="`ph-${trailing} ${buttonSize.icon}`")
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';

const SoButton = defineComponent({
  props: {
    size: {
      type: String,
      default: 'md',
    },
    mode: {
      type: String,
      default: 'main',
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
  },
  setup(props) {
    const buttonColor = computed(() => {
      if (props.mode === 'main') return 'bg-green-800 hover:bg-green-700 active:bg-green-900 disabled:opacity-50 text-white';
      if (props.mode === 'soft') return 'bg-gray-opacity-12 text-gray-500 hover:bg-green-400 hover:text-green-800 active:bg-white border-white active:border-green-800 border border-solid disabled:bg-gray-100 disabled:text-green-800 disabled:text-opacity-50';
      if (props.mode === 'outline') return 'bg-transparent text-gray-500 border-gray-900 border-opacity-12 border border-solid hover:bg-gray-900 hover:bg-opacity-4 hover:border-opacity-12 hover:text-gray-900 active:text-gray-800 disabled:bg-white disabled:text-gray-900 disabled:text-opacity-32';
      if (props.mode === 'outline:white') return 'bg-transparent text-white border-white border border-solid hover:bg-opacity-20 hover:bg-white active:text-gray-800 disabled:bg-white disabled:text-gray-900 disabled:text-opacity-32';
      if (props.mode === 'soft:active') return 'bg-white border border-green-800 text-green-800'
      return 'bg-transparent text-gray-500 hover:bg-gray-900 hover:bg-opacity-4 hover:text-gray-900 border-white border border-solid active:border-gray-900 active:border-opacity-12 active:text-gray-800 disabled:bg-white disabled:text-gray-900 disabled:text-opacity-32';
    });

    const buttonSize = computed(() => {
      if (props.size === 'lg') return {
        button: 'px-3 h-12 gap-x-2',
        text: 'button-lg',
        icon: 'text-xl',
      };
      if (props.size === 'md') return {
        button: 'px-3 h-10 gap-x-2',
        text: 'button-sm',
        icon: 'text-xl',
      };
      if (props.size === 'paginator') return {
        button: 'w-9 h-9 gap-x-1',
        text: 'button-sm',
        icon: 'text-md',
      };
      if (props.size === 'xs') return {
        button: 'px-3 h-8 gap-x-1',
        text: 'button-xs',
        icon: 'text-md',
      };
      return {
        button: 'px-3 h-9 gap-x-1',
        text: 'button-sm',
        icon: 'text-md',
      };
    })

    const buttonIcon = computed(() => {
      if (props.leading === 'Google') return '';
      return `ph-${props.leading}`
    })

    return {
      buttonColor,
      buttonSize,
      buttonIcon,
    };
  },
});

export default SoButton;
</script>

<style lang="scss">
.so-button {
  @apply flex items-center justify-center rounded-lg;
  transition: all 200ms ease-in-out;
}
</style>
