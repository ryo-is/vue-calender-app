import Vue from "vue"
import Store from "@/stores/flags"
import { HomeComponentState } from "@/types"

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "hoge"
    }
  },
  created() {
    Store.dispatch("flags/setHiddenToolbarItems", true)
  },
  methods: {
    getText(): string {
      return this.text
    }
  }
})
