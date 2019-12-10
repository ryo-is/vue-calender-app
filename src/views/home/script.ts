import Vue from "vue"
import { createNamespacedHelpers } from "vuex"
// import { HomeComponentState } from "@/types"

const flagsMapActionsHelper = createNamespacedHelpers("flags").mapActions

export default Vue.extend({
  data() {
    return {
      text: "hoge",
      setHiddenToolbarItems: null,
      setOverlay: null
    }
  },
  created() {
    console.log(flagsMapActionsHelper(["setHiddenToolbarItems", "setOverlay"]))
    const flagsMapActions = flagsMapActionsHelper([
      "setHiddenToolbarItems",
      "setOverlay"
    ])
    this.setHiddenToolbarItems = flagsMapActions.setHiddenToolbarItems
    this.setOverlay = flagsMapActions.setOverlay
    this.setHiddenToolbarItems(true)
    this.setOverlay(false)
  },
  methods: {
    getText(): string {
      return this.text
    }
  }
})
