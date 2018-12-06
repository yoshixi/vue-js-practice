<template lang  ="html">
  <section class="container">
    <div class="">
      <h3>{{user.id}}</h3>
      <img :src="user.profile_image_url" width="120">
      <p>{{user.description || 'No description'}}</p>
      <p>
        <nuxt-link to="/">
          <small><b>top へ戻る</b> </small>
        </nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({route, app}) {
    const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
    const items = await app.$axios.$get(`https://qiita.com/api/v2/items/?query=user:${route.params.id}`)
    return { user, items }
  },
  data() {
    return {
      userId: this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
