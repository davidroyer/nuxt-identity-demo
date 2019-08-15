/* eslint-disable no-console */
export default async function(context) {
  // console.log(context.app.store)
  console.log('middleware/auth.js RAN!')

  if (process.server) return
  console.log('middleware/auth.js RAN!')

  try {
    const user = await context.app.$identity.currentUser()
    console.log('TCL: user', user)
    await user.jwt()
    context.store.commit('setCurrentUser', user)
    return true
  } catch (error) {
    // context.app.store.dispatch('notifications/show', {
    //   message: 'Woops, looks like your session expired 😅'
    // })
    return context.redirect(401, '/sign-in')
  }
  // }
}
