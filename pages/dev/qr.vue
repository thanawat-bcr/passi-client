<template lang="pug">
LayoutPrimary.qr
  .flex.flex-col.gap-y-12.items-center
    img.w-64.h-64.border(src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=AB1325944")
    h4.text-primary-500 This is QR Code for Passport No. AB1325944 ( TUTOR )
    img.w-64.h-64.border(src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=AA8298121")
    h4.text-primary-500 This is QR Code for Passport No. AA8298121 ( FLUKE )
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const qr = defineComponent({
  // setup() {},
});

export default qr;
</script>

<style lang="scss" scoped>
// .qr {}
</style>
