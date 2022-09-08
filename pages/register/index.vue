<template lang="pug">
LayoutRegister.index(:current="step")
  RegisterQrCode(v-if="step === 0" @onQrHandler="onQrHandler")
  RegisterFace(v-if="step === 1" :passport="user.passport" @onFaceHandler="onFaceHandler")
  RegisterEmail(v-if="step === 2" @onEmailHandler="onEmailHandler")
  RegisterPin(v-if="step === 3" @onPinHandler="onPinHandler")
</template>

<script lang="ts">
import { defineComponent, reactive, ref, useRouter } from '@nuxtjs/composition-api';

const index = defineComponent({
  setup() {
    const router = useRouter();
    const step = ref(3);
    const user = reactive({
      passport: null,
      email: null,
      password: null,
      pin: null,
    })

    // STEP 1
    const onQrHandler = (value: any) => {
      console.log('DeconQrHandlerode!', value);
      user.passport = value
      step.value = 1;
    };

    // STEP 2
    const onFaceHandler = () => {
      console.log('onFaceHandler!');
      step.value = 2;
    };

    // STEP 3
    const onEmailHandler = (value: any) => {
      user.email = value.email
      user.password = value.password
      console.log('onEmailHandler!', user.passport, user.email, user.password);
      step.value = 3;
    };

    // STEP 3
    const onPinHandler = (value: any) => {
      user.pin = value.pin
      console.log('onPinHandler!', user.passport, user.email, user.password, user.pin);
      step.value = 3;
    };

    return {
      step,

      user,

      onQrHandler,
      onFaceHandler,
      onEmailHandler,
      onPinHandler,
    };
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
