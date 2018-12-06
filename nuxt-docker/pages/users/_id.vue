
<template lang  ="html">
  <div class="">
    <p>
      /users/ _id.vue
      User ID {{userId}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id
    }
  }
}
</script>

<style lang="css">
</style>
