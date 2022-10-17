<template lang="pug">
LayoutPrimary.index
  //- .flex.flex-col.gap-y-2
  //-   .flex.flex-col.gap-y-12.items-center.my-6
  //-     img.w-64.h-64(:src="qrSrc")
  //-     h2 {{ countdown }}
  //-     SoButton(@click="onLogout") Logout
</template>

<script lang="js">
import { computed, defineComponent, onMounted, onBeforeUnmount, ref, useRouter } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const index = defineComponent({
  setup() {
    const router = useRouter()
    // const MAX_TIMER = ref(0);
    // const qrSrc = ref('');
    // const timer = ref(null)
    // const countdown = ref(MAX_TIMER);

    // const countDownTimer = () => {
    //   if (countdown.value > 0) {
    //     setTimeout(() => {
    //       countdown.value -= 1
    //       countDownTimer()
    //     }, 1000);
    //   } else {
    //     getQrSrc()
    //     countdown.value = MAX_TIMER.value
    //   }
    // }
    // const getQrSrc = async () => {
    //   const res = await axios.get('/user/qr')
    //   MAX_TIMER.value = res.data.timer
    //   qrSrc.value = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${res.data.token}`
    //   countDownTimer()
    // }

    onMounted(() => {
      router.push('/immigration')
    })

    // // onBeforeUnmount(() => clearInterval(timer.value))

    // const onLogout = () => {
    //   localStorage.clear();
    //   router.push('/login')
    // }


    return {
      // qrSrc,
      // countdown,

      // onLogout,
    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
