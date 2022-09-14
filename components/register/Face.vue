<template lang="pug">
section.face
  .flex.flex-col.my-auto.items-center.gap-y-3
    .flex.flex-col.items-center
      h3.text-primary-500 {{ title }}
      .caption.text-gray-100.text-center {{ subtitle }}
    .flex.flex-col.gap-y-4.items-start
      .w-48.h-48.mx-auto.relative.shadow-lg
        input(type="file" @change="onChange" ref="fileInput").absolute.inset-0.opacity-0.z-30
        .w-full.h-full.bg-center.bg-cover.inset-0.z-20(v-if="img" :style="{ 'background-image': `url(${img})` }")
        img.w-full.h-full.mx-auto.absolute.inset-0.z-10(v-else src="/face-scanner.png")
      .flex.gap-x-2.mt-2
        i.ph-lightbulb.body-1.text-primary-500.mt-1
        .flex.flex-col
          .subtitle-1.text-primary-500 Good Lighting
          .caption.text-gray-100 Make sure you are in a well lit area and both ears are uncovered.
      .flex.gap-x-2
        i.ph-smiley.body-1.text-primary-500.mt-1
        .flex.flex-col
          .subtitle-1.text-primary-500 Look Straight
          .caption.text-gray-100 Hold your phone at eye level and look straight to the camera.
      .flex.flex-col.gap-y-2.w-full.mt-4
        SoButton(block @click="onVerify" leading="circle-wavy-check") Verify

</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const face = defineComponent({
  props: {
    passport: {
      type: String,
      required: true,
    }
  },
  setup(props, ctx) {
    const images = ref(null);
    const img = ref(null);
    const fileInput = ref('');

    const title = ref('Take a Selfie!');
    const subtitle = ref('Please take a selfie to compare with your passport photo.');

    const onChange = (e) => {
      images.value = e.target.files[0];
      let file = fileInput.value.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          img.value = e.target.result
        }
        reader.readAsDataURL(file[0])
      }
    }

    const onVerify = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('passport', props.passport)
      console.log('Verify:', props.passport)
      try {
        await axios.post('/kairos/verify', formData)
        ctx.emit('onFaceHandler')
      }catch(err) {
        title.value = 'Verification Failed!'
        subtitle.value = 'Please try again!'
        alert(err)
      }
    }

    return {
      img,
      fileInput,

      title,
      subtitle,

      onChange,
      onVerify,
    }
  },
});
export default face;
</script>

<style lang="scss" scoped>
// .face {}
</style>
