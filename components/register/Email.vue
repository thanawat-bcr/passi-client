<template lang="pug">
section.flex.flex-col.gap-y-4
  .flex.flex-col.my-auto.items-center
    .flex.flex-col.items-center
      h2.text-primary-500 Create an Account!
      .body-2.text-gray-100 Please enter your email and password.
  SoForm(@submit="submit")
    .body-2.text-primary-500 Email
    SoInput.mb-6(v-model="user.email" rules="required|email" placeholder="Email" leading="envelope" type="email")
    .body-2.text-primary-500 Password
    SoInput.mb-6(v-model="user.password" rules="required" placeholder="******" leading="key" type="password")
    .body-2.text-primary-500 Confirmed Password
    SoInput.mb-6(v-model="user.passwordConfirmed" :rules="confirmedRule" placeholder="******" leading="key" type="password")
    .flex.flex-col.gap-y-2.mt-12
      SoButton(type="submit" block) Submit
</template>


<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const email = defineComponent({
  setup(props: any, ctx: any) {
    const user = reactive({
      email: '',
      password: '',
      passwordConfirmed: '',
    });

    const confirmedRule = computed(() => 'required|is:' + user.password)

    const submit = async () => {
      try {
        const res = await axios.post('/user/email', { email: user.email })
        ctx.emit('onEmailHandler', { email: user.email, password: user.password});
      }catch(err) {
        console.log(err)
      }

    };

    return {
      user,
      confirmedRule,
      submit,
    };
  },
});

export default email;
</script>
<style lang="scss" scoped>
// .email {}
</style>
