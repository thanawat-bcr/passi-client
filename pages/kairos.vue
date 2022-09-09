<template lang="pug">
.kairos.container.mx-auto
  h3.text-primary-500.font-bold KAIROS API TESTER
  .w-full.flex.flex-col.items-center.gap-y-4.my-4
    .w-64.h-64.bg-green-50.relative.border.rounded-lg
      input(type="file" @change="onChange" ref="fileInput").absolute.inset-0.opacity-0
      .w-64.h-64.bg-center.bg-cover(:style="{ 'background-image': `url(${img})` }")
    .flex.gap-x-2
      SoButton(v-for="s in subjects" :key="s" :mode="subject === s ? '' : 'outline'" @click="subject = s") {{ s }}
  .w-full.grid.gap-2(class="grid-cols-1 md:grid-cols-2")
    SoButton(block @click="onEnroll") Enroll
    SoButton(block @click="onVerify") Verify
    SoButton(block @click="onTest") Test
  .w-full.mt-4
    h3.text-primary-500.text-center {{ kairosResult }}
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

    const kairosResult = ref('');

    const subjects = ref(['tutorism', 'fluke', 'jimmy', 'AB1325944']);
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
        kairosResult.value = "Enroll: " + res.data.status
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
        kairosResult.value = "Verify: " + res.data.status
      }catch(err) {
        console.log(err)
      }
    }

    const onTest = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      console.log(images.value)
      try {
        const res = await axios.post('/image/file', formData)
        console.log('data:', res.data)
      }catch(err) {
        console.log(err)
      }
    }

    return {
      subjects,
      subject,

      kairosResult,

      img,
      fileInput,
      onChange,

      onEnroll,
      onVerify,
      onTest,
    }
  },
});

export default kairos;
</script>

<style lang="scss" scoped>
// .kairos {}
</style>
