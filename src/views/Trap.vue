<template>
  <section class="container mx-10">
    <Title>Trap Card</Title>

    <Cards :data="trap" v-if="trap"/>
    <p v-else>Loading...</p>
  </section>
</template>

<script>
import Title from '@components/Title.vue';
import Cards from '@components/Cards.vue';

export default {
  name: 'Trap',
  components: {
    Title,
    Cards,
  },
  data() {
    return {
      trap: null,
    }
  },
  mounted() {
    document.title = 'Trap Card';

    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Trap Card')
      .then((data) => data.json())
      .then((result) => {
        this.trap = result.data
      });
  },
}
</script>
