<template>
  <div>
    <h1>Admin</h1>
    <div v-if="user">
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.currentUser || {}
    }
  },

  middleware: 'admin-guard'
}
</script>

<style></style>
