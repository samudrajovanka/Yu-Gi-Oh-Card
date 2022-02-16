<template>
  <button class="btn-back" @click="goBack">&laquo; Back</button>
</template>

<script>
export default {
  name: 'Back Button',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="scss" scoped>
  .btn-back {
    background-color: transparent;
    border: none;
  }
</style>