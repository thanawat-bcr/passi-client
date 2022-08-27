<template lang="pug">
LayoutPrimary.index
  .flex.flex-col.my-auto.items-center.gap-y-6
    img.w-20.h-20(src="/logo.png")
    h2.text-primary-500 Scan QR Code
    .w-48.h-48.border
    .body-2.text-primary-500.text-center Please scan your QR Code here to register your passport into our system.
  .flex.items-center.gap-x-1
    .caption.text-gray-100 Already have an account?
    .caption.text-primary-400.cursor-pointer(class="hover:underline" @click="$router.push('/login')") Sign in.
  
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const index = defineComponent({
  // setup() {},
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
