import Vue from "vue"
import { createNamespacedHelpers } from "vuex"
import { HomeComponentState } from "@/types"

// const { mapActions } = createNamespacedHelpers("flags")
const flagsMapActions = createNamespacedHelpers("flags").mapActions

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "hoge"
    }
  },
  created() {
    // eslint-disable-next-line prettier/prettier
    (this as any).setHiddenToolbarItems(true)
  },
  methods: {
    ...flagsMapActions(["setHiddenToolbarItems"]),
    getText(): string {
      return this.text
    }
  }
})
