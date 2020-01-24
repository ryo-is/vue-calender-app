import Vue from "vue"
import { HomeComponentState } from "@/types"
import { flagsNamespacedHelper } from "@/stores/flags"

// Vuex store helpers
const flagsMapActions = flagsNamespacedHelper.mapActions([
  "setHiddenToolbarItems",
  "setOverlay"
])

// Component data
const data: HomeComponentState = {
  tableHeaders: [
    { text: "Name", value: "name", sortable: false },
    { text: "Age", value: "age" },
    { text: "Gender", value: "gender", sortable: false }
  ],
  tableOptions: {
    page: -1,
    sortBy: ["age"],
    sortDesc: [false]
  },
  tableItems: [
    { name: "Taro", age: 20, gender: "Male" },
    { name: "Hanako", age: 18, gender: "Female" },
    { name: "Ichiro", age: 25, gender: "Male" }
  ]
}

export default Vue.extend({
  data(): HomeComponentState {
    return data
  },
  created() {
    this.setHiddenToolbarItems(true)
    this.setOverlay(false)
  },
  methods: {
    ...flagsMapActions
  }
})
