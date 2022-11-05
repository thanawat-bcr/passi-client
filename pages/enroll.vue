<template lang="pug">
LayoutPrimary.index
  .py-4
    ImmigrationEnroll(v-if="!passport" @onEnroll="onEnroll")
    ImmigrationQrcode(v-else :passport="passport")
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';

const index = defineComponent({
  setup() {
    const passport = ref(null);
    const onEnroll = (data: any) => {
      passport.value = data
      
    }

    return {
      passport,
      onEnroll,
    }
  },
});

export default index;
</script>

<style lang="scss" scoped>
// .index {}
</style>
