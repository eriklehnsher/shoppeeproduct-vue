<template>
  <Header />

  <router-view v-slot="{ Component }" class="body__view">
    <transition>
      <component :is="Component"></component>
    </transition>
  </router-view>

  <Footer />
</template>

<script>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');

#app {
  height: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'ABeeZee', sans-serif;
}
.body__view {
  padding: 38px 28px;
  min-height: calc(100vh - 300px);
}
</style>
