<template>
  <section class="container mx-10">
    <BackButton />

    <div v-if="card" class="content mt-3">
      <img :src="card.card_images[0].image_url" :alt="card.name" class="content__image">

      <div class="content__data">
        <Title>{{ card.name }}</Title>
        <p class="content__type p-3 mt-3">{{ card.type }}</p>
        
        <div class="content__status mt-3" v-if="isMonster">
          <p>
            <span v-if="card.level">⭐</span>
            <span v-else class="font-bold">Link</span>
            {{ card.level ?? card.linkval }}
          </p>
          <p class="content__status-divider">|</p>
          <div class="content__status-power">
            <p class="content__status-atk">ATK/{{ card.atk }}</p>
            <p class="content__status-def" v-if="card.def">DEF/{{ card.def }}</p>
          </div>
        </div>
        <p class="mt-7">{{ card.desc }}</p>
      </div>
    </div>
    <p v-else>Loading...</p>
  </section>
</template>

<script>
import Title from '@components/Title.vue';
import BackButton from '@components/BackButton.vue';

export default {
  name: 'Detail Card',
  components: {
    Title,
    BackButton,
  },
  props: {
    id: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      card: null,
      isMonster: false,
    }
  },
  mounted() {
    document.title = 'Detail Card';

    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${this.id}`)
      .then((data) => data.json())
      .then((result) => {
        this.card = result.data[0];
        this.isMonster = this.card.type !== 'Spell Card' && this.card.type !== 'Trap Card';

        document.title = `${this.card.name} | Detail Card`;
      });
  },
}
</script>

<style lang="scss" scoped>
  .content {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: $gap;

    &__image {
      width: 100%;
      height: auto;
      grid-column: span 12 / span 12;

      @media (min-width: $breakpoint-small) {
        grid-column: span 5 / span 5;
      }
    }

    &__data {
      grid-column: span 12 / span 12;

      @media (min-width: $breakpoint-small) {
        grid-column: span 7 / span 7;
      }
    }

    &__type {
      display: inline-block;
      background-color: $gray;
      border-radius: $border-radius-card;
    }

    &__status {
      display: flex;
      gap: 8px;
      flex-direction: column;

      @media (min-width: $breakpoint-tablet) {
        flex-direction: row;
        gap: $gap;
        align-items: center;
      }

      &-divider {
        display: none;

        @media (min-width: $breakpoint-tablet) {
          display: inline-block;
        }
      }

      &-power {
        display: flex;
        gap: $gap;
      }

      &-atk {
        color: $secondary-color;
      }

      &-def {
        color: $primary-color;
      }
    }

  }
</style>