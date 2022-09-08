<template lang="pug">
section
  .flex.flex-col.items-center.gap-y-6
    h3.text-primary-500 Scan QR Code
    .w-64.h-64.border
      qrcode-stream(@init="init" @decode="decode" :camera="'auto'")
    .body-2.text-primary-500.text-center Please scan your QR Code here to register your passport into our system.
    .flex.items-center.gap-x-1
      .caption.text-gray-100 Already have an account?
      .caption.text-primary-400.cursor-pointer(class="hover:underline" @click="$router.push('/')") Sign in.
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  setup(props: any, ctx: any) {
    const init = () => { console.log('Init!') };
    const decode = (value: any) => {
      ctx.emit('onQrHandler', value)
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
