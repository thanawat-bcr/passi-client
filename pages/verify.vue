<template lang="pug">
LayoutPrimary.verify
  SoForm(@submit="onSubmit")
    input(type="file" @change="onChange")
    SoButton.mt-6(block type="submit") verify
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const verify = defineComponent({
  setup() {
    const images = ref(null);

    const onChange = (e) => {
      images.value = e.target.files[0];
    }
    const onSubmit = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('name', 'tutorism')
      formData.append('gallery_name', 'passi')
      try {
        const res = await axios.post('/verify', formData)
        console.log(res)
      }catch(err) {
        console.log(err)
      }
    }

    return {
      onChange,
      onSubmit,
    }
  },
});

export default verify;
</script>

<style lang="scss" scoped>
// .verify {}
</style>
