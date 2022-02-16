<template>
  <div class="cards mt-4">
    <Card v-for="item in dataShow" :key="item.id" :data="item" />
  </div>

  <div class="btn-container mt-5" v-if="dataShow.length < data.length ">
    <Button @click="loadMore">Load More</Button>
  </div>
</template>

<script>
import Card from '@components/Card.vue';
import Button from '@components/Button.vue';

export default {
  name: 'Cards',
  components: {
    Card,
    Button
  },
  data() {
    return {
      dataPerShow: 24,
      dataShow: [],
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.dataShow = this.data.slice(0, this.dataPerShow);
  },
  methods: {
    loadMore() {
      this.dataShow = this.data.slice(0, this.dataPerShow += 24);
    }
  },
}
</script>

<style lang="scss" scoped>
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: flex-start;
    gap: $gap;
  }

  .btn-container {
    display: flex;
    justify-content: center;
  }
</style>