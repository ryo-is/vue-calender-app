import { Module } from "vuex"
import { FlagsState, RootState } from "./types"

export const flags: Module<FlagsState, RootState> = {
  namespaced: true,
  state: {
    hiddenToolbarItems: false,
    overlay: false
  },
  mutations: {
    setHiddenToolbarItems(state: any, value: boolean): void {
      state.hiddenToolbarItems = value
    },
    setOverlay(state: any, value: boolean): void {
      state.overlay = value
    }
  },
  getters: {
    hiddenToolbarItems(state: any): boolean {
      return state.hiddenToolbarItems
    },
    overlay(state: any): boolean {
      return state.overlay
    }
  },
  actions: {
    setHiddenToolbarItems(context: any, value: boolean) {
      context.commit("setHiddenToolbarItems", value)
    },
    setOverlay(context: any, value: boolean) {
      context.commit("setOverlay", value)
    }
  }
}
