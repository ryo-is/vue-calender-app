import Vue from "vue"
import Store from "@/store"
import { HomeComponentState } from "@/types"

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "hoge"
    }
  },
  created() {
    Store.dispatch("setHiddenToolbarItems", true)
  },
  methods: {
    getText(): string {
      return this.text
    }
  }
})
