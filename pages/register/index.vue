<template lang="pug">
LayoutPrimary.index
  .flex.flex-col.my-auto.items-center.gap-y-6
    img.w-20.h-20(src="/logo.png")
    h2.text-primary-500 Scan QR Code
    .w-64.h-64.border
      qrcode-stream(@init="init" @decode="decode" :camera="'auto'")
    .body-2.text-primary-500.text-center Please scan your QR Code here to register your passport into our system.
  .flex.items-center.gap-x-1
    .caption.text-gray-100 Already have an account?
    .caption.text-primary-400.cursor-pointer(class="hover:underline" @click="$router.push('/login')") Sign in.
  
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api';

const index = defineComponent({
  setup() {
    const router = useRouter();

    const init = () => { console.log('Init!') };
    const decode = (value: any) => {
      console.log('Decode!', value);
      router.push('/register/email/' + value );
    };

    return {
      init,
      decode,
    };
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
