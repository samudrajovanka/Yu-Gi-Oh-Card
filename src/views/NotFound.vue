<template>
  <section class="container mx-10">
    <p class="mb-8">Halaman yang anda cari tidak ditemukan :(</p>

    <Button :to="{ name: 'Monster' }">Go Home</Button>
  </section>
</template>

<script>
import Button from '@components/Button.vue';

export default {
  name: 'NotFound',
  components: {
    Button,
  },
  mounted() {
    document.title = 'Not Found';
  },
}
</script>

<style lang="scss">
  
</style>