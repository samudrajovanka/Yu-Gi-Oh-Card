<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from '@components/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout,
  },
}
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
