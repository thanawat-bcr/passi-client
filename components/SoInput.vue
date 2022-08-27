<template lang="pug">
//- ValidationProvider.w-full.flex.items-center(:rules="rules" v-slot="{ errors }" :class="{'mb-6': rules && rules.length > 0}")
ValidationProvider.w-full.flex.items-center(:rules="rules" v-slot="{ errors }")
  label.so-input.w-full.relative(
    :class="`${inputSize.container} ${inputColor}`"
    :style="`${errors.length > 0 ? 'border-color: #E46B7C;' : ''}`"
  )
    i.mr-2(v-if="leading" :class="`ph-${leading}`" :style="`${errors.length > 0 ? 'color: #E46B7C;' : ''}`")
    input.w-full(
      v-if="inputType !== 'select'"
      :value="value"
      :type="inputType"
      :disabled="disabled"
      :placeholder="placeholder"
      :style="`${errors.length > 0 ? 'color: #E46B7C;' : ''}`"
      :class="inputSize.text"
      @mouseover="hoverHandler(true)"
      @mouseleave="hoverHandler(false)"
      @focus="focusHandler(true)"
      @blur="focusHandler(false)"
      @input="$emit('input', $event.target.value)"
    )
    i.ml-2(v-if="type === 'password'" :class="showPassword ? 'ph-eye' : 'ph-eye-slash'" @click="togglePassword")
    i.ml-2(v-if="trailing" :class="`ph-${trailing}`")
    .w-full.flex.items-center.absolute(v-if="errors.length > 0" style="bottom: -22px; left: 0;")
      i.mr-1.text-error.text-xs(:class="'ph-warning'")
      span.text-xs.text-error {{ errors[0] }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api';

const SoInput = defineComponent({
  props: {
    value: {},
    placeholder: {},
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
    type: {
      type: String,
      default: 'text',
    },
    block: {
      type: String,
      default: 'full',
    },
    options: {},
    rules: {},
  },
  setup(props) {
    const showPassword = ref(false);
    const togglePassword = () => { showPassword.value = !showPassword.value; };

    const focusState = ref(false);
    const focusHandler = (state: boolean) => { focusState.value = state; };

    const hoverState = ref(false);
    const hoverHandler = (state: boolean) => { hoverState.value = state; };

    const inputType = computed(() => {
      if (props.type === 'password' && showPassword.value) return 'text';
      return props.type;
    });

    const inputColor = computed(() => {
      let inactive = 'text-primary-500 bg-white border border-solid border-gray-100'
      let hover = 'text-primary-500 bg-white border border-solid border-primary-400'
      let focus = 'text-primary-500 bg-white border border-solid border-primary-400'
      let disabled = 'text-gray-200 bg-gray-100'

      if (props.disabled) return disabled;
      if (focusState.value) return focus;
      if (hoverState.value) return hover;
      return inactive;
    });

    const inputSize = computed(() => {
      if (props.size === 'lg') return {
        container: 'px-4 h-12',
        text: 'text-md',
        icon: 'text-xl',
      };
      if (props.size === 'md') return {
        container: 'px-4 h-10',
        text: 'text-md',
        icon: 'text-md',
      };
      return {
        container: 'px-3 h-8',
        text: 'text-sm',
        icon: 'text-md',
      };
    })

    return {
      inputType,

      showPassword,
      togglePassword,

      focusState,
      focusHandler,

      hoverState,
      hoverHandler,

      inputColor,
      inputSize,
    };
  },
});

export default SoInput;
</script>

<style lang="scss">
textarea, input, select{
  outline: none;
}
.so-input {
  @apply flex items-center justify-start rounded;
  transition: all 150ms ease-in-out;

  input {
    @apply placeholder-gray-200;
    background-color: transparent;
  }

  // DISABLE NUMBER TYPE ARROW
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
}
</style>
