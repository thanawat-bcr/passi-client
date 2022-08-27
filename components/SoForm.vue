<template lang="pug">
.so-form
  ValidationObserver(v-slot="{ invalid, handleSubmit }")
    form(@submit.prevent="handleSubmit(onSubmit)")
      slot
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const SoForm = defineComponent({
  setup(props, ctx) {
    const onSubmit = () => { ctx.emit('submit'); };

    return {
      onSubmit,
    };
  },
});

export default SoForm;
</script>

<style lang="scss">
// .so-form {
//   .form--group {
//     @apply flex flex-col;
//     .form--row {
//       @apply flex gap-x-2;
//       .so-input {
//         @apply flex-1;
//       }
//     }
//   }
// }
</style>
