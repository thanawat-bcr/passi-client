<template lang="pug">
LayoutPrimary.index
  ImmigrationEnroll(v-if="!passport_no" @onEnroll="onEnroll")
  ImmigrationQrcode(v-else :passport_no="passport_no")
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const index = defineComponent({
  setup() {
    const passport_no = ref('');
    const onEnroll = (passport: string) => {
      passport_no.value = passport
    }

    return {
      passport_no,
      onEnroll,
    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
