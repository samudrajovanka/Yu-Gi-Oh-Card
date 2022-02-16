<template>
  <div href="/card/123" class="card p-3">
    <header class="card__header">
      <img :src="data.card_images[0].image_url" :alt="data.name" class="card__img">
      <div class="card__level" v-if="isMonster">
        <p class="text-small">
          <span v-if="data.level">⭐</span>
          <span v-else class="font-bold">L</span>
          {{ data.level ?? data.linkval }}
        </p>
      </div>
    </header>

    <div class="card__strong text-small" v-if="isMonster">
      <p class="card__strong-atk">ATK/{{ data.atk }}</p>
      <p class="card__strong-def" v-if="data.def">DEF/{{ data.def }}</p>
    </div>

    <h3 :class="{ 'mt-2': !isMonster }">{{ data.name }}</h3>

    <router-link :to="{ name: 'Detail Card', params: { id: data.id } }" class="strecthed-link"></router-link>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isMonster: false,
    }
  },
  mounted() {
    this.isMonster = this.data.type !== 'Spell Card' && this.data.type !== 'Trap Card';
  },
}
</script>

<style lang="scss" scoped>
  .card {
    max-width: 400px;
    width: auto;
    border: 1px solid $gray;
    border-radius: $border-radius-card;
    background-color: $white;
    position: relative;
    transition: all 0.2s ease-in-out;

    &__header {
      position: relative;

      .card__img {
        width: 100%;
        height: auto;
      }

      .card__level {
        position: absolute;
        bottom: -20px;
        left: 20px;
        background-color: $primary-color;
        width: 50px;
        aspect-ratio: 1 / 1 ;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $white;
        border-radius: 100%;
        box-shadow: 0 4px 20px rgba(0 , 0, 0, 0.2);
      }
    }


    &__strong {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      &-atk {
        color: $secondary-color;
      }

      &-def {
        color: $primary-color;
      }
    }

    @media (min-width: $breakpoint-tablet) {
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 20px rgba(0 , 0, 0, 0.2);
      }
    }
  }
</style>