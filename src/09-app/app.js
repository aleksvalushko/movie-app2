// eslint-disable-next-line import/no-unused-modules
import Vue from 'vue'

import { regVuePlugins } from '../00-low-lavel-stuff/vue-init'
import store from '../03-store'
import router from '../08-router'
import App from '../09-app/App.vue'

Vue.config.productionTip = false

const appInit = async () => {
  await regVuePlugins()
  new Vue({
    router,
    store,
    render: createElement => createElement(App)
  }).$mount('#app')
}

export {
  appInit
}
