<template lang="html">
  <div class="">
    <span>single layout</span>
    <AppNavigation />
    <hr>
    <nuxt />
    <nuxt-link to="/">トップに戻る</nuxt-link>
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>

<style lang="css">
</style>
