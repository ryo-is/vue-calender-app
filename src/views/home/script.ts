import Vue from "vue"
import { createNamespacedHelpers } from "vuex"
import { HomeComponentState } from "@/types"

const flagsMapActions = createNamespacedHelpers("flags").mapActions

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "hoge"
    }
  },
  created() {
    const self: any = this
    self.setHiddenToolbarItems(true)
    self.setOverlay(false)
  },
  methods: {
    ...flagsMapActions(["setHiddenToolbarItems", "setOverlay"]),
    getText(): string {
      return this.text
    }
  }
})
