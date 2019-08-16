<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Nuxt Identity Demo
      </h1>
      <section>
        <p>URL: {{ $route.fullPath }}</p>
        <p>SSR: {{ ssr ? 'true' : 'false' }}</p>
      </section>
      <b-button @click="login">Login</b-button>
      <b-button @click="logout">Logout</b-button>
      <b-button @click="signUp">Sign Up</b-button>

      <div v-if="user" style="margin-top: 1.5em;">
        <strong>user.email</strong>
        <hr />
        <pre>{{ user }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
const email = 'droyer01@gmail.com'
const password = 'Dance4life'
export default {
  computed: {
    user() {
      return this.$store.state.currentUser || {}
    }
  },
  asyncData() {
    return {
      ssr: process.server
    }
  },

  methods: {
    async login() {
      const userData = await this.$identity.login(email, password, true)
      this.$store.commit('setCurrentUser', userData)
      alert('Signed In')
    },

    async logout() {
      const user = await this.$identity.currentUser()
      this.$store.dispatch('handleUserUpdate', null)
      await user.logout()
      alert('Logged Out')
    },

    async signUp() {
      await this.$identity.signup(email, password)
      alert('signed up!')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
