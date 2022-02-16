<template>
  <footer>
    <p>2022 - Jovanka</p>
    <p>API from <a href="https://db.ygoprodeck.com/api-guide/" target="_blank" rel="noopener noreferrer">YGOPRODECK</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
  footer {
    padding: 16px;
    border-top: 1px solid $gray;
    
    > p {
      text-align: center;

      > a {
        color: $primary-color;
      }
    }
  }
</style>