<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-identity-demo
      </h1>
      <b-button @click="login">Login</b-button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  middleware: 'auth',
  methods: {
    async login() {
      const email = 'droyer@wiley.com'
      const password = 'Focus2019@'
      const userData = await this.$identity.login(email, password, true)
      this.$store.commit('setCurrentUser', userData)
      // console.log('TCL: login -> userData', userData)
      alert('Signed In')
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
