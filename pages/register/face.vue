<template lang="pug">
LayoutPrimary.face
  .flex.flex-col.my-auto.items-center.gap-y-3
    img.w-20.h-20(src="/logo.png")
    h2.text-primary-500 Take a Selfie!
    .body-2.text-gray-100.text-center Please take a selfie to compare with your passport photo.
    section(v-if="isCameraOpen")
      video(ref="camera" width="350" height="262.5" autoplay v-show="!isPhotoTaken")
      canvas(ref="canvas" width="350" height="262.5" v-show="isPhotoTaken" id="photoTaken")
      SoButton(block @click="takePhoto" v-if="!isPhotoTaken" leading="camera").mt-6 Take Photo
      SoButton(block @click="verifyPhoto" v-if="isPhotoTaken" leading="circle-wavy-check").mt-6 Use This Photo
      SoButton(block @click="openCamera" v-if="isPhotoTaken" leading="camera" mode="outline").mt-3 Retake Photo
    .flex.flex-col.gap-y-3.items-center(v-else)
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
  SoButton(block v-if="!isCameraOpen" leading="camera" @click="openCamera").mt-auto Open Camera
  //- section(v-if="isCameraOpen")
    SoButton(@click="takePhoto") Take Photo
  //- section(v-if="isCameraOpen && isPhotoTaken")
    SoButton
      a(id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage") Download Image
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const face = defineComponent({
  setup() {
    const isCameraOpen = ref(false);
    const isPhotoTaken = ref(false);

    const openCamera = () => {
        isCameraOpen.value = true;
        isPhotoTaken.value = false;
        createCameraElement();
    }
    const closeCamera = () => {
        isCameraOpen.value = false;
        isPhotoTaken.value = false;
        stopCameraStream();
    }

    const camera = ref('');
    const canvas = ref('');

    const createCameraElement = () => {
      const constraints = ((window as any).constraints = {
        audio: false,
        video: true
      });


      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          (camera.value as any).srcObject = stream;
        })
        .catch(error => {
          alert("May the browser didn't support or there is some errors.");
      });
    }

    const stopCameraStream = () => {
      let tracks = (camera.value as any).srcObject.getTracks();

      tracks.forEach((track: any) => {
        track.stop();
      });
    }

    const takePhoto = () => {
      isPhotoTaken.value = !isPhotoTaken.value;

      const context = (canvas.value as any).getContext('2d');
      context.drawImage((camera.value as any), 0, 0, 350, 262.5);
    }

    const downloadImage = () => {
      const download: any = document.getElementById("downloadPhoto");
      const canvas = (document.getElementById("photoTaken") as any).toDataURL("image/png")
        .replace("image/png", "image/octet-stream");

      download.setAttribute("href", canvas);
    }

    const verifyPhoto = () => {
      console.log('verified');
    }

    return {
      camera,
      canvas,

      isCameraOpen,
      isPhotoTaken,

      openCamera,
      closeCamera,
      takePhoto,
      downloadImage,
      verifyPhoto,
    }
  },
});

export default face;
</script>

<style lang="scss" scoped>
// .face {}
</style>
