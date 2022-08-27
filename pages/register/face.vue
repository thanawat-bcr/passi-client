<template lang="pug">
LayoutPrimary.face
  .flex.flex-col.my-auto.items-center.gap-y-3
    img.w-20.h-20(src="/logo.png")
    h2.text-primary-500 Take a Selfie!
    .body-2.text-gray-100.text-center Please take a selfie to compare with your passport photo.
    img.w-40.h-40(src="/face-scanner.png")
    .flex.gap-x-2
      i.ph-lightbulb.body-1.text-primary-500.mt-1
      .flex.flex-col
        .subtitle-1.text-primary-500 Good Lighting
        .caption.text-gray-100 Make sure you are in a well lit area and both ears are uncovered.
    .flex.gap-x-2
      i.ph-smiley.body-1.text-primary-500.mt-1
      .flex.flex-col
        .subtitle-1.text-primary-500 Look Straight
        .caption.text-gray-100 Hold your phone at eye level and look straight to the camera.
    .flex.gap-x-2
      i.ph-fast-forward.body-1.text-primary-500.mt-1
      .flex.flex-col
        .subtitle-1.text-primary-500 Not Ready ?
        .caption.text-gray-100 Skip and come back to redo process again later when you are ready.
  SoButton(block leading="camera").mt-auto Open Camera
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

const face = defineComponent({
  // setup() {},
});

export default face;
</script>

<style lang="scss" scoped>
// .face {}
</style>
