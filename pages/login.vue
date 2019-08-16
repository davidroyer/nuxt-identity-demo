<template>
  <div class="login">
    <h1>Login Page</h1>
    <label for="loginEmail">Email</label>
    <b-form-input
      id="loginEmail"
      v-model="loginEmail"
      type="email"
    ></b-form-input>

    <label for="loginPassword">Password</label>
    <b-form-input
      id="loginPassword"
      v-model="loginPassword"
      type="password"
    ></b-form-input>

    <b-button class="mt-4" @click="login">Login</b-button>
  </div>
</template>

<script>
export default {
  middleware: 'authenicated-checker',

  data: () => ({
    loginEmail: '',
    loginPassword: ''
  }),

  methods: {
    async login() {
      const userData = await this.$identity.login(
        this.loginEmail,
        this.loginPassword,
        true
      )
      this.$store.commit('setCurrentUser', userData)
      alert('Signed In')
    }
  }
}
</script>

<style></style>
