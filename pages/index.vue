<template lang="pug">
LayoutPrimary
  .flex.flex-col.w-full.my-auto.items-center
    img.w-32.h-32(src="/logo.png")
    h1.text-primary-500 PASSI
    SoButton.mt-4(block @click="$router.push('/login')") Login
    SoButton.mt-4(block mode="outline" @click="$router.push('/register')") Register
    SoButton.mt-4(block @click="$router.push('/kairos')") KAIROS
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const index = defineComponent({
  setup() {
    const testAPI = async () => {
      // const res = await axios.get('https://catfact.ninja/fact');
      const res = await axios.get('/test');
      console.log('API', res);

    }

    return {
      testAPI
    }
  }
});

export default index;
</script>

<style lang="scss">
// .index {}
</style>