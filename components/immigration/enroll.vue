<template lang="pug">
section
  .flex.flex-col.my-auto.items-center.gap-y-6
    .flex.flex-col.items-center
      h2.text-primary-500 Enroll New Passport
      .body-1.text-gray-100.text-center Enroll your identification by capture your current face image.
    .flex.flex-col.gap-y-6.items-start
      .w-48.h-48.mx-auto.relative.shadow-lg
        input(type="file" @change="onChange" ref="fileInput").absolute.inset-0.opacity-0.z-30
        .w-full.h-full.bg-center.bg-cover.inset-0.z-20(v-if="img" :style="{ 'background-image': `url(${img})` }")
        img.w-full.h-full.mx-auto.absolute.inset-0.z-10(v-else src="/face-scanner.png")

    .flex.flex-col.gap-y-6.items-center.w-full
      section.flex.flex-col.gap-y-6.items-start(v-if="!img")
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
      section(class="w-full sm:w-96" v-else)
        SoForm(@submit="onEnroll")
          .body-2.text-primary-500 Name
          SoInput.mb-6(v-model="user.name" rules="required" placeholder="Name")
          .body-2.text-primary-500 Surname
          SoInput.mb-6(v-model="user.surname" rules="required" placeholder="Surname")
          .flex.flex-col.gap-y-2.mt-10
            SoButton(block type="submit" leading="smiley-wink") Enroll

</template>

<script lang="js">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const enroll = defineComponent({
  setup(props, ctx) {
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

    const user = reactive({
      name: '',
      surname: '',
    });

    const onEnroll = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('name', user.name)
      formData.append('surname', user.surname)
      console.log('Ennroll:', user.name)
      try {
        const res = await axios.post('/kairos/enroll', formData)
        console.log(res.data)
        ctx.emit('onEnroll', res.data.passport)
      }catch(err) {
        console.log(err)
      }
    }

    return {
      img,
      fileInput,

      user,

      onChange,
      onEnroll,
    }
  },
});
export default enroll;
</script>

<style lang="scss" scoped>
// .enroll {}
</style>
