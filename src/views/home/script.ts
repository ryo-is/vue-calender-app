import Vue from "vue"
import { HomeComponentState } from "@/types"

export default Vue.extend({
  data(): HomeComponentState {
    return {
      text: "hoge"
    }
  },
  methods: {
    getText(): string {
      return this.text
    }
  }
})
