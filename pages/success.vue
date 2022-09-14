<template lang="pug">
LayoutPrimary.success
  h1.text-primary-500 SUCCESS
  .body-1 {{ token }}
</template>

<script lang="js">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';

const success = defineComponent({
  setup() {
    const token = ref('');
    onMounted(() => {
      token.value = localStorage.getItem('token')
    })

    return {
      token,
    }
  },
});

export default success;
</script>

<style lang="scss" scoped>
// .success {}
</style>
