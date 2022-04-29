<template>
  <div id="app">
    <header-index></header-index>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderIndex from './components/Header-Index.vue'

export default {
  name: 'App',
  components: {
    HeaderIndex
  }
}
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
  }
  h4 {
    text-align: center;
  }
  .content {
    display: flex;
    justify-content: center;
  }
</style>
