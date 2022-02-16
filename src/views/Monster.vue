<template>
  <section class="container mx-10">
    <Title>Monster Card</Title>

    <Cards :data="monsters" v-if="monsters"/>
    <p v-else>Loading...</p>
  </section>
</template>

<script>
import Title from '@components/Title.vue';
import Cards from '@components/Cards.vue';

export default {
  name: 'Monster',
  components: {
    Title,
    Cards,
  },
  data() {
    return {
      monsters: null,
    }
  },
  mounted() {
    document.title = 'Monster Card';

    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      .then((data) => data.json())
      .then((result) => {
        const typeExcept = ['Spell Card', 'Trap Card', 'Skill Card'];
        this.monsters = result.data.filter((card) => typeExcept.indexOf(card.type) === -1);
      });
  },
}
</script>