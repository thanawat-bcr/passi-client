<template lang="pug">
LayoutPrimary.face
  .flex.flex-col.my-auto.items-center.gap-y-3
    img.w-20.h-20(src="/logo.png")
    h2.text-primary-500 {{ title }}
    .body-2.text-gray-100.text-center {{ subtitle }}
    .flex.flex-col.gap-y-4.items-start
      .w-48.h-48.mx-auto.relative.shadow-lg
        input(type="file" @change="onChange" ref="fileInput").absolute.inset-0.opacity-0.z-30
        .w-full.h-full.bg-center.bg-cover.inset-0.z-20(v-if="img" :style="{ 'background-image': `url(${img})` }")
        img.w-full.h-full.mx-auto.absolute.inset-0.z-10(v-else src="/face-scanner.png")
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
      .flex.flex-col.gap-y-2.w-full
        SoButton(block @click="onVerify" leading="circle-wavy-check") Verify
        SoButton(block mode="outline" @click="onSignOut" leading="sign-out") Sign Out
</template>

<script>
import { defineComponent, onMounted, ref, useRouter } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const GALLERY_NAME = 'passi-test';

const face = defineComponent({
  setup() {
    const images = ref(null);
    const img = ref(null);
    const fileInput = ref('');

    const title = ref('Take a Selfie!');
    const subtitle = ref('Please take a selfie to compare with your passport photo.');

    const router = useRouter();

    const passport = ref('');
    onMounted(async () => {
      const id = localStorage.getItem('id');

      try {
        const res = await axios.post('/user/passport', {
          user_id: id,
        })
        passport.value = res.data.passport
        console.log(res)
      } catch (err) {
        console.log('err', err)
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

    const onVerify = async () => {
      const formData = new FormData();
      formData.append('image', images.value)
      formData.append('subject_id', passport.value)
      formData.append('gallery_name', GALLERY_NAME)
      console.log('Verify:', passport.value)
      try {
        const res = await axios.post('/kairos/verify', formData)
        router.push('/register/pin')
      }catch(err) {
        title.value = 'Verification Failed!'
        subtitle.value = 'Please try again!'
        console.log(err)
      }
    }

    const onSignOut = () => {
      localStorage.clear();
      router.push('/')
    }

    return {
      passport,

      img,
      fileInput,

      title,
      subtitle,

      onChange,
      onVerify,
      onSignOut
    }
  },
});

export default face;
</script>

<style lang="scss" scoped>
// .face {}
</style>
