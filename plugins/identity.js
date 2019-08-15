/* eslint-disable no-console */
import GoTrue from 'gotrue-js'
console.log('TCL: GoTrue', GoTrue)

const auth = new GoTrue({
  APIUrl: 'https://nuxtauth-identity.netlify.com/.netlify/identity',
  audience: '',
  setCookie: true
})
console.log('TCL: auth', auth)

export default ({ app }, inject) => {
  inject('identity', auth)
}
