<template lang="pug">
.kairos.container.mx-auto
  h1.text-primary-500.font-bold KAIROS API TESTER
  .w-full.flex.flex-col.items-center.gap-y-4.my-4
    .w-64.h-64.border.bg-center.bg-cover(:style="{ 'background-image': `url(${img})` }")
    input(type="file" @change="onChange" ref="fileInput")
  .w-full.grid.grid-cols-2.gap-x-2
    SoButton(block @click="onEnroll") Enroll
    SoButton(block @click="onVerify") Verify

</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const GALLERY_NAME = 'passi';

const kairos = defineComponent({
  setup() {
    const images = ref(null);
    const img = ref(null);
    const fileInput = ref('');

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

    const onEnroll = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('name', 'tutorism')
      formData.append('gallery_name', GALLERY_NAME)
      try {
        const res = await axios.post('/enroll', formData)
        console.log(res)
      }catch(err) {
        console.log(err)
      }
    }

    const onVerify = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('name', 'tutorism')
      formData.append('gallery_name', GALLERY_NAME)
      try {
        const res = await axios.post('/verify', formData)
        const { confidence, status } = res.data.images[0].transaction
        console.log('confidence:', confidence, 'status:', status)
      }catch(err) {
        console.log(err)
      }
    }

    return {
      img,
      fileInput,
      onChange,

      onEnroll,
      onVerify,
    }
  },
});

export default kairos;
</script>

<style lang="scss" scoped>
// .kairos {}
</style>
