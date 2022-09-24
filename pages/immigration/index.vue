<template lang="pug">
LayoutPrimary.qr
  .flex.flex-col.gap-y-2
    .flex.gap-y-12.my-6.justify-between
      span
      img.w-64.h-64(:src="qrSrc")
      SoButton(leading="address-book" @click="$router.push('/immigration/enroll')") Enroll New Passport
    .grid.grid-cols-12.gap-x-1.px-3.py-2
      .col-span-1.subtitle-1 ID
      .col-span-2.subtitle-1 PASSPORT_NO
      .col-span-2.subtitle-1 NAME
      .col-span-2.subtitle-1 SURNAME
      .col-span-2.subtitle-1.text-center REGISTERED
      .col-span-2.subtitle-1.text-center REVOKED
    .grid.grid-cols-12.gap-x-1.px-3.py-2.rounded.cursor-pointer.items-center(
      v-for="(passport, index) in passports"
      :key="passport.id"
      @click="selectedIndex = index"
      :class="{'bg-primary-500 text-white': selectedIndex === index}"
    )
      .col-span-1.body-2 {{ passport.id}}
      .col-span-2.body-2 {{ passport.passport_no}}
      .col-span-2.body-2 {{ passport.name}}
      .col-span-2.body-2 {{ passport.surname}}
      .col-span-2.body-1.flex.justify-center
        i.ph-envelope-simple.text-success(v-if="passport.email")
        i.ph-x-circle.text-error(v-else)
      .col-span-2.body-1.flex.justify-center
        i.ph-check-circle.text-success(v-if="passport.check_out_at")
        SoButton(v-else @click="onRevoke(passport.id)") Revoke
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
      passports.value = res.data.passports.reverse()
    })

    const qrSrc = computed(() => `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${passports.value[selectedIndex.value]?.id}`);

    const onRevoke = async (id) => {
      try {
        await axios.post('/admin/revoke', { passport: id })

        const res = await axios.get('/admin/passports')
        passports.value = res.data.passports.reverse()

      } catch (err) {
        alert(err)
      }
    }

    return {
      passports,
      selectedIndex,

      qrSrc,

      onRevoke,
    }
  },
});

export default qr;
</script>

export default list;
</script>

<style lang="scss" scoped>
// .list {}
</style>
