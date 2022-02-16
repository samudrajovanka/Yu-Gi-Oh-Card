<template>
  <Navbar />
  <main class="content">
    <slot></slot>
  </main>
  <Footer />
</template>

<script>
import Navbar from '@components/Navbar.vue';
import Footer from '@components/Footer.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
  .content {
    flex: 1 1 0%
  }
</style>