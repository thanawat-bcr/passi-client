<template lang="pug">
section.flex.flex-col.gap-y-4
  .flex.flex-col.my-auto.items-center
    .flex.flex-col.items-center
      h2.text-primary-500 Create a Pin!
      .body-2.text-gray-100 Please enter a 6-digit PIN code.
  SoForm(@submit="submit")
    .body-2.text-primary-500 Pin
    SoInput.mb-6(v-model="pin.value" rules="required|digits:6" placeholder="******" leading="key" type="number")
    .body-2.text-primary-500 Confirmed Pin
    SoInput.mb-6(v-model="pin.confirmed" :rules="rule" placeholder="******" leading="key" type="number")
    .flex.flex-col.gap-y-2.mt-12
      SoButton(type="submit" block) Submit
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api';

const pin = defineComponent({
  setup(props: any, ctx: any) {
    const pin = reactive({
      value: '',
      confirmed: '',
    })

    const rule = computed(() => 'required|digits:6|is:' + pin.value);

    const submit = () => {
      ctx.emit('onPinHandler', { pin: pin.value });
    };

    return {
      pin,
      rule,
      submit,
    };
  },
});

export default pin;
</script>

<style lang="scss" scoped>
// .pin {}
</style>
