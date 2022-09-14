<template lang="pug">
LayoutPrimary.login.justify-center
  .flex.flex-col.items-center.gap-y-6
    img.w-20.h-20(src="/logo.png")
    SoForm(@submit="submit")
      SoInput.mb-8(v-model="user.email" rules="required|email" placeholder="Email" leading="envelope" type="email")
      SoInput.mb-8(v-model="user.password" rules="required" placeholder="******" leading="key" type="password")
      .flex.flex-col.gap-y-2
        SoButton(type="submit" block) Login
        //- .overline.text-primary-400.cursor-pointer(class="hover:underline" @click="forgetPassword") Forgot Password ?
    .flex.items-center.gap-x-1
      .caption.text-gray-100 Not have an account?
      .caption.text-primary-400.cursor-pointer(class="hover:underline" @click="$router.push('/register')") Create One.
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const login = defineComponent({
  setup() {
    const router = useRouter();
    const user = reactive({
      email: '',
      password: '',
    });

    const submit = async () => {
      console.log(user)
      try {
        const res = await axios.post('/auth/login', {
          email: user.email, 
          password: user.password, 
        })
        console.log(res.data)
        router.push('/success')
      }catch(err: any) {
        console.log(err)
      }
    };

    const forgetPassword = () => {
      console.log('FORGET PASSWORD!')
    }

    return {
      user,
      submit,
      forgetPassword,
    };
  },
});

export default login;
</script>

<style lang="scss" scoped>
// .login {}
</style>
