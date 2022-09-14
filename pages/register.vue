<template lang="pug">
LayoutRegister.index(:current="step")
  RegisterQrCode(v-if="step === 0" @onQrHandler="onQrHandler")
  RegisterFace(v-if="step === 1" :passport="user.passport" @onFaceHandler="onFaceHandler")
  RegisterEmail(v-if="step === 2" @onEmailHandler="onEmailHandler")
</template>

<script lang="ts">
import { defineComponent, reactive, ref, useRouter } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const index = defineComponent({
  setup() {
    const router = useRouter();
    const step = ref(0);
    const user = reactive({
      passport: null,
      email: null,
      password: null,
    })

    // STEP 1
    const onQrHandler = (value: any) => {
      console.log('onQrHandler!', value);
      user.passport = value
      step.value = 1;
    };

    // STEP 2
    const onFaceHandler = () => {
      console.log('onFaceHandler!');
      step.value = 2;
    };

    // STEP 3
    const onEmailHandler = async (value: any) => {
      user.email = value.email
      user.password = value.password
      console.log('onEmailHandler!', user.passport, user.email, user.password);
      try {
        const res = await axios.post('/auth/register', {
          passport: user.passport, 
          email: user.email, 
          password: user.password, 
        })
        const { token } = res.data
        localStorage.setItem('token', token)

        router.push('/')
      }catch(err) {
        alert(err)
      }
    };

    return {
      step,

      user,

      onQrHandler,
      onFaceHandler,
      onEmailHandler,
    };
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
