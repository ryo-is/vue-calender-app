import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "./registerServiceWorker"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (h): any => h(App)
}).$mount("#app")
