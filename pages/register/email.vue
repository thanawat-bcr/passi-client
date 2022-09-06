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
      SoInput.mb-8(v-model="user.passwordConfirmed" :rules="confirmedRule" placeholder="******" leading="key" type="password")
      .flex.flex-col.gap-y-2
        SoButton(type="submit" block) Register
</template>

<script lang="ts">
import { computed, defineComponent, reactive, useRouter } from '@nuxtjs/composition-api';
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { axios } from '@/use/useAxios';

const email = defineComponent({
  setup() {
    const router = useRouter();
    const user = reactive({
      email: '',
      password: '',
      passwordConfirmed: '',
    });

    const confirmedRule = computed(() => 'required|is:' + user.password)

    const submit = () => {
      console.log(user);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(async (userCredential) => {
          // Registered
          const user = userCredential.user;
          const res = await axios.post('/user/register', {
            user_id: user.uid,
            passport_no: 'AB1325944'
          })
          console.log(res)
          // const token = await user.getIdToken();
          // console.log(token);
          // localStorage.setItem('token', token);
          // router.push('/register/face');
        })
        .catch((error) => {
          // An error ocurred.
          console.log(error);
        });
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
