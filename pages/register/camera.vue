<template lang="pug">
LayoutPrimary.camera
  .flex.flex-col.my-auto.items-center.gap-y-3
    SoButton(@click="toggleCamera") Toggle Camera
    section(v-if="isCameraOpen")
      video(ref="camera" width="350" height="262.5" autoplay v-show="!isPhotoTaken")
      canvas(ref="canvas" width="350" height="262.5" v-show="isPhotoTaken" id="photoTaken")
    section(v-if="isCameraOpen")
      SoButton(@click="takePhoto") Take Photo
    section(v-if="isCameraOpen && isPhotoTaken")
      SoButton
        a(id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage") Download Image
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const camera = defineComponent({
  setup() {
    const isCameraOpen = ref(false);
    const isPhotoTaken = ref(false);
    const toggleCamera = () => {
      if(isCameraOpen.value) {
        isCameraOpen.value = false;
        isPhotoTaken.value = false;
        stopCameraStream();
      } else {
        isCameraOpen.value = true;
        createCameraElement();
      }
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

      console.log(camera.value);
    }

    const downloadImage = () => {
      const download: any = document.getElementById("downloadPhoto");
      const canvas = (document.getElementById("photoTaken") as any).toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");

      download.setAttribute("href", canvas);

    }

    return {
      camera,
      canvas,

      isCameraOpen,
      isPhotoTaken,

      toggleCamera,
      takePhoto,
      downloadImage,
    }
  },
});

export default camera;
</script>

<style lang="scss" scoped>
// .camera {}
</style>
