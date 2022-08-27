<template lang="pug">
LayoutPrimary.login
  img.w-20.h-20(src="/logo.png")
  SoForm(@submit="submit")
    SoInput.mb-8(v-model="user.email" rules="required|email" placeholder="Email" leading="envelope" type="email")
    SoInput.mb-8(v-model="user.password" rules="required" placeholder="******" leading="password" type="password")
    SoButton(type="submit") Submit
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const login = defineComponent({
  setup() {
    const user = reactive({
      email: '',
      password: '',
    });

    const submit = () => {
      console.log(user);
    };

    return {
      user,
      submit,
    };
  },
});

export default login;
</script>

<style lang="scss" scoped>
// .login {}
</style>
