<template lang="pug">
.kairos.container.mx-auto
  h1.text-primary-500.font-bold KAIROS API TESTER
  .w-full.flex.flex-col.items-center.gap-y-4.my-4
    .w-64.h-64.bg-green-50.relative.border.rounded-lg
      input(type="file" @change="onChange" ref="fileInput").absolute.inset-0.opacity-0
      .w-64.h-64.bg-center.bg-cover(:style="{ 'background-image': `url(${img})` }")
    .flex.gap-x-2
      SoButton(v-for="s in subjects" :key="s" :mode="subject === s ? '' : 'outline'" @click="subject = s") {{ s }}
  .w-full.grid.grid-cols-2.gap-x-2
    SoButton(block @click="onEnroll") Enroll
    SoButton(block @click="onVerify") Verify
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const GALLERY_NAME = 'passi-test';

const kairos = defineComponent({
  setup() {
    const images = ref(null);
    const img = ref(null);
    const fileInput = ref('');

    const subjects = ref(['tutorism', 'fluke', 'jimmy']);
    const subject = ref('tutorism');

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
      formData.append('subject_id', subject.value)
      formData.append('gallery_name', GALLERY_NAME)
      console.log('Enroll:', subject.value)
      try {
        const res = await axios.post('/kairos/enroll', formData)
        console.log('data:', res.data)
      }catch(err) {
        console.log(err)
      }
    }

    const onVerify = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('subject_id', subject.value)
      formData.append('gallery_name', GALLERY_NAME)
      console.log('Verify:', subject.value)
      try {
        const res = await axios.post('/kairos/verify', formData)
        console.log('data:', res.data)
      }catch(err) {
        console.log(err)
      }
    }

    return {
      subjects,
      subject,

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
