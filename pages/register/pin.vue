<template lang="pug">
LayoutPrimary.pin
  .flex.flex-col.my-auto.items-center.gap-y-3
    img.w-20.h-20(src="/logo.png")
    h2.text-primary-500 Create a PIN!
    .body-2.text-gray-100.text-center Please enter a 6-digit PIN code.
    .flex.flex-col.my-6.items-center.gap-y-6
      SoForm(@submit="submit")
        SoInput.mb-8(v-model="pin.value" rules="required|digits:6" placeholder="******" leading="key" type="number")
        SoInput.mb-8(v-model="pin.confirmed" :rules="rule" placeholder="******" leading="key" type="number")
        .flex.flex-col.gap-y-2
          SoButton(type="submit" block) Submit
          SoButton(block mode="outline" @click="onSignOut" leading="sign-out") Sign Out
</template>

<script lang="ts">
import { useRouter } from '@nuxtjs/composition-api';
import { computed, defineComponent, reactive, ref } from '@vue/composition-api';

const pin = defineComponent({
  setup() {
    const router = useRouter();
    const pin = reactive({
      value: '',
      confirmed: '',
    })

    const rule = computed(() => 'required|digits:6|is:' + pin.value);

    const submit = () => {
      console.log(pin.value);
    };


    const onSignOut = () => {
      localStorage.clear();
      router.push('/')
    }

    return {
      pin,
      rule,
      submit,
      onSignOut,
    };
  },
});

export default pin;
</script>

<style lang="scss">
// .pin {}
</style>
