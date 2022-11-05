<template lang="pug">
section
  .flex.flex-col.my-auto.items-center.gap-y-6
    .flex.flex-col.items-center
      h2.text-primary-500 Register QR Code
      .body-1.text-gray-100.text-center.mt-6 QR Code for Passport No.
      .subtitle-1.text-gray-100.text-center {{ passport.passport }}
    .flex.flex-col.gap-y-4.items-center
      img.w-64.h-64.p-4.shadow-xl(:src="qrSrc")
      SoButton(block @click="$router.push('/enroll')") Close
  
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

const qrcode = defineComponent({
  props: {
    passport: {
      required: true,
    }
  },
  setup(props: any) {
    const qrSrc = computed(() => `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${props.passport.id}`)

    return {
      qrSrc,
    }
  },
});

export default qrcode;
</script>

<style lang="scss" scoped>
// .qrcode {}
</style>
