<template lang="pug">
LayoutPrimary.qr
  .flex.flex-col.gap-y-2
    .flex.flex-col.gap-y-12.items-center.my-6
      img.w-64.h-64(:src="qrSrc")
    .grid.grid-cols-8.gap-x-1.px-3.py-2
      .col-span-2.subtitle-1 PASSPORT_NO
      .col-span-2.subtitle-1 NAME
      .col-span-2.subtitle-1 SURNAME
      .col-span-1.subtitle-1 REGISTERED
    .grid.grid-cols-8.gap-x-1.px-3.py-2.rounded(
      v-for="(passport, index) in passports"
      :key="passport.passport_no"
      @click="selectedIndex = index"
      :class="{'bg-primary-500 text-white': selectedIndex === index}"
    )
      .col-span-2.body-2 {{ passport.passport_no}}
      .col-span-2.body-2 {{ passport.name}}
      .col-span-2.body-2 {{ passport.surname}}
      .col-span-1.body-1.flex.justify-center
        i.ph-check-circle(v-if="passport.id")
        i.ph-x-circle(v-else)
  //- .flex.flex-col.gap-y-12.items-center
    img.w-64.h-64.border(src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=AB1325944")
    h4.text-primary-500 This is QR Code for Passport No. AB1325944 ( TUTOR )
    img.w-64.h-64.border(src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=AA8298121")
    h4.text-primary-500 This is QR Code for Passport No. AA8298121 ( FLUKE )
</template>

<script>
import { computed, defineComponent, onMounted, ref } from '@nuxtjs/composition-api';
import { axios } from '@/use/useAxios';

const qr = defineComponent({
  setup() {
    const passports = ref([])
    const selectedIndex = ref(0)
    onMounted(async () => {
      const res = await axios.get('/admin/passports')
      passports.value = res.data.passports
    })

    const qrSrc = computed(() => `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${passports.value[selectedIndex.value]?.passport_no}`);

    return {
      passports,
      selectedIndex,

      qrSrc,
    }
  },
});

export default qr;
</script>

<style lang="scss" scoped>
// .qr {}
</style>
