import Vue from "vue"
import { createNamespacedHelpers } from "vuex"
import { HomeComponentState } from "@/types"

const flagsNamespacedHelper = createNamespacedHelpers("flags")
const flagsMapActions = flagsNamespacedHelper.mapActions([
  "setHiddenToolbarItems",
  "setOverlay"
])

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "hoge"
    }
  },
  created() {
    this.setHiddenToolbarItems(true)
    this.setOverlay(false)
  },
  methods: {
    ...flagsMapActions,
    getText(): string {
      return this.text
    }
  }
})
