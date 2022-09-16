<template lang="pug">
section
  .flex.flex-col.items-center.gap-y-6
    h3.text-primary-500 Scan QR Code
    .w-64.h-64.border
      qrcode-stream(@init="init" @decode="decode" :camera="'auto'")
    .body-2.text-primary-500.text-center Place the QR Code in the frame to verify tourist’s passport.
    .body-2.text-primary-500.text-center {{ user }}
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const index = defineComponent({
  setup(props: any, ctx: any) {
    const init = () => { console.log('Init!') };
    const user:any = ref(null);
    const decode = async (value: any) => {
      try {
        // await axios.post('/qr/verify', { token: value, pin: '111111' })
        const res = await axios.post('/qr/verify', { token: value, pin: '123456' })
        user.value = res.data.user
        alert("success")
      }catch(err) {
        alert(err)
      }
    };

    return {
      user,

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
