<template>
  <router-link v-if="to" class="btn" :to="to">
    <slot></slot>
  </router-link>

  <button v-else class="btn" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
}
</script>

<style lang="scss">
  .btn {
    padding: 12px 32px;
    background-color: $primary-color;
    color: $white;
    border: none;
    border-radius: $border-radius-btn;
    transition: color 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
      background-color: $primary-dark-color;
      text-decoration: none;
    }
  }
</style>