<template lang="pug">
.kairos.container.mx-auto
  .w-full.mt-4
    h2.text-primary-500.text-center KAIROS API TESTER
  .w-full.flex.flex-col.items-center.gap-y-4.my-4
    .w-64.h-64.bg-green-50.relative.border.rounded-lg
      input(type="file" @change="onChange" ref="fileInput").absolute.inset-0.opacity-0
      .w-64.h-64.bg-center.bg-cover(:style="{ 'background-image': `url(${img})` }")
    .flex.gap-x-2
      SoButton(v-for="s in subjects" :key="s" :mode="subject === s ? '' : 'outline'" @click="subject = s") {{ s }}
  .w-full.grid.gap-2(class="grid-cols-1 md:grid-cols-2")
    //- SoButton(block @click="onEnroll") Enroll
    SoButton(block @click="onVerify") Verify
  .w-full.mt-4
    h3.text-primary-500.text-center {{ kairosResult }}
</template>

<script>
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const kairos = defineComponent({
  setup() {
    const images = ref(null);
    const img = ref(null);
    const fileInput = ref('');

    const kairosResult = ref('');

    const subjects = ref([]);
    const subject = ref();

    onMounted(async () => {
      try {
        const res = await axios.get('/kairos/subject')
        console.log('data:', res.data.passports)
        subjects.value = res.data.passports;
        subject.value = res.data.passports[0];

      }catch(err) {
        console.log(err)
      }

    })

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
      formData.append('passport', subject.value)
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
      formData.append('passport', subject.value)
      console.log('Verify:', subject.value)
      try {
        const res = await axios.post('/kairos/verify', formData)
        console.log('data:', res.data)
        kairosResult.value = "Verify: " + res.data.status
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
    }
  },
});

export default kairos;
</script>

<style lang="scss" scoped>
// .kairos {}
</style>
