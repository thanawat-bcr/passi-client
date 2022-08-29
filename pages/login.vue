<template lang="pug">
LayoutPrimary.login
  .flex.flex-col.my-auto.items-center.gap-y-6
    img.w-20.h-20(src="/logo.png")
    SoForm(@submit="submit")
      SoInput.mb-8(v-model="user.email" rules="required|email" placeholder="Email" leading="envelope" type="email")
      SoInput.mb-8(v-model="user.password" rules="required" placeholder="******" leading="key" type="password")
      .flex.flex-col.gap-y-2
        SoButton(type="submit" block) Login
        .overline.text-primary-400.cursor-pointer(class="hover:underline" @click="forgetPassword") Forgot Password ?
  .flex.items-center.gap-x-1
    .caption.text-gray-100 Not have an account?
    .caption.text-primary-400.cursor-pointer(class="hover:underline" @click="$router.push('/register')") Create One.
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from '@nuxtjs/composition-api';
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const login = defineComponent({
  setup() {
    const router = useRouter();
    const user = reactive({
      email: '',
      password: '',
    });

    const submit = () => {const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then(async (userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const token = await user.getIdToken();
          console.log(token)
          localStorage.setItem('token', token);
          router.push('/');
        })
        .catch((error) => {
          // An error ocurred.
          console.log(error)
        });
    };

    const forgetPassword = () => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, 'tutor34676@gmail.com')
        .then(() => {
          console.log('success');
        })
        .catch((error) => {
          console.log(error)
        });
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
