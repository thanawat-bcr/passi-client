<template lang="pug">
LayoutPrimary.email
  .flex.gap-x-1.items-center.mr-auto
    i.ph-caret-left.subtitle-2
    .subtitle-2.text-gray-100.cursor-pointer(class="hover:underline" @click="$router.push('/register')") Back
  .flex.flex-col.my-auto.items-center.gap-y-6
    img.w-20.h-20(src="/logo.png")
    SoForm(@submit="submit")
      SoInput.mb-8(v-model="user.email" rules="required|email" placeholder="Email" leading="envelope" type="email")
      SoInput.mb-8(v-model="user.password" rules="required" placeholder="******" leading="key" type="password")
      .flex.flex-col.gap-y-2
        SoButton(type="submit" block) Register
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from '@nuxtjs/composition-api';

const email = defineComponent({
  setup() {
    const router = useRouter();
    const user = reactive({
      email: '',
      password: '',
    });

    const submit = () => {
      console.log(user);
      router.push('/register/face');
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
