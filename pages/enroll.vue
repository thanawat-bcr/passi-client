<template lang="pug">
LayoutPrimary.enroll
  div.w-48.h-48.border.bg-center.bg-cover(:style="{ 'background-image': `url(${img})` }")
  SoForm(@submit="onSubmit")
    input(type="file" @change="onChange" ref="fileInput")
    SoButton.mt-6(block type="submit") enroll
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const enroll = defineComponent({
  setup() {
    const images = ref(null);
    const img = ref(null);
    const fileInput = ref('');

    const onChange = (e) => {
      images.value = e.target.files[0];
      let file = fileInput.value.files
      console.log(file)
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          img.value = e.target.result
        }
        reader.readAsDataURL(file[0])
      }
    }
    const onSubmit = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('name', 'tutorism')
      formData.append('gallery_name', 'passi')
      try {
        const res = await axios.post('/enroll', formData)
        console.log(res)
      }catch(err) {
        console.log(err)
      }
    }

    return {
      img,
      fileInput,
      onChange,
      onSubmit,
    }
  },
});

export default enroll;
</script>

<style lang="scss" scoped>
// .enroll {}
</style>
