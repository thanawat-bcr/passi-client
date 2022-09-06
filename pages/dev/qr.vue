<template lang="pug">
LayoutPrimary.qr
  img.w-64.h-64.border(src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=AB1325944")
  h4.mt-4.text-primary-500 This is QR Code for Passport No. AB1325944
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
