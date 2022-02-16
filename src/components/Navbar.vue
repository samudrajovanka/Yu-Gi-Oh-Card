<template>
  <nav class="navbar">
    <div class="navbar__backdrop" v-if="isMenuOpen" @click="toggleMenu"></div>
    <div class="container navbar__nav">
      <button class="navbar__toggle" @click="toggleMenu" aria-label="button toggle">☰</button>
      <router-link class="navbar__title" :to="{ name: 'Monster' }">Yu-Gi-Oh! Card</router-link>

      <div class="navbar__menu" :class="{ 'navbar__menu--open': isMenuOpen }">
        <router-link
          v-for="route in routes"
          :key="route.label"
          :to="route.to"
          @click="closeMenu"
        >
          {{ route.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      routes: [
        { label: 'Monster', to: { name: 'Monster' } },
        { label: 'Spell', to: { name: 'Spell' } },
        { label: 'Trap', to: { name: 'Trap' } },
      ],
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
}
</script>

<style lang="scss" scoped>
  .navbar {
    position: sticky;
    top: 0;
    background-color: $primary-color;
    padding-top: 8px;
    padding-bottom: 8px;
    z-index: $z-index-navbar;

    &__nav {
      display: flex;
      gap: $gap;
      align-items: center;

      @media (min-width: $breakpoint-tablet) {
        justify-content: space-between;
      }
    }

    &__toggle {
      background-color: transparent;
      color: $white;
      border: none;
      font-size: 1.2rem;

      @media  (min-width: $breakpoint-tablet) {
        display: none;
      }
    }

    &__title {
      text-transform: uppercase;
      user-select: none;
      color: $white;
      
      &:hover {
        text-decoration: none;
      }

      @media  (min-width: $breakpoint-tablet) {
        font-size: 1.4rem;
      }
    }

    &__backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &__menu {
      $padding: 16px;

      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: $white;
      width: 75%;
      padding: $padding 0;
      transform: translateX(-700px);
      transition: transform 0.5s ease-in-out;

      &--open {
        transform: translateX(0);
      }

      @media  (min-width: $breakpoint-tablet) {
        position: relative;
        flex-direction: row;
        background-color: transparent;
        transform: translateX(0);
        width: auto;
        gap: $gap;
      }
      
      a {
        color: $black;
        padding: $padding;

        &.router-link-active {
          background-color: $gray;
        }

        &:hover {
          text-decoration: none;
        }

        @media  (min-width: $breakpoint-tablet) {
          color: $white;
          padding: 0;

          &.router-link-active {
            background-color: transparent;
            text-decoration: underline;
          }
        
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>