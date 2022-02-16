<template>
  <section class="container mx-10">
    <Title>Spell Card</Title>

    <Cards :data="spell" v-if="spell"/>
    <p v-else>Loading...</p>
  </section>
</template>

<script>
import Title from '@components/Title.vue';
import Cards from '@components/Cards.vue';

export default {
  name: 'Spell',
  components: {
    Title,
    Cards,
  },
  data() {
    return {
      spell: null,
    }
  },
  mounted() {
    document.title = 'Spell Card';

    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell Card')
      .then((data) => data.json())
      .then((result) => {
        this.spell = result.data
      });
  },
}
</script>
