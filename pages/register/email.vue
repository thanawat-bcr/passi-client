<template lang="pug">
LayoutPrimary.email
  .flex.flex-col.my-auto.items-center.gap-y-6
    img.w-20.h-20(src="/logo.png")
    SoForm(@submit="submit")
      SoInput.mb-8(v-model="user.email" rules="required|email" placeholder="Email" leading="envelope" type="email")
      SoInput.mb-8(v-model="user.password" rules="required" placeholder="******" leading="key" type="password")
      .flex.flex-col.gap-y-2
        SoButton(type="submit" block) Register
        //- .overline.text-primary-400.cursor-pointer(class="hover:underline") Forgot Password ?
  //- .flex.items-center.gap-x-1
    .caption.text-gray-100 Not have an account?
    .caption.text-primary-400.cursor-pointer(class="hover:underline") Create One.
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';

const email = defineComponent({
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

export default email;
</script>

<style lang="scss" scoped>
// .email {}
</style>
