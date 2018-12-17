<template lang  ="html">
  <div class="">
    <p>
      /users/index.vue
    </p>
      <ul>
        <li v-for="user in users" :key=  "user.id">
          <p>{{user.id}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
    async updateUsers() {
      var users = await this.$axios.$get('/users')
      this.users = users.data
    }
  },
  mounted () {
    this.updateUsers()
  }
}
</script>

<style lang="css">
</style>
