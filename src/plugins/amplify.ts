import Amplify, { Auth } from "aws-amplify"
import awsExports from "./aws_exports"
import router from "@/router"
import { Route } from "vue-router"
Amplify.configure(awsExports)

// 認証確認
router.beforeEach((to: Route, from: Route, next: any) => {
  if (to.matched.some((record: any) => record.meta.requiredAuth)) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        console.log("authorized")
        next()
      })
      .catch(() => {
        console.log("not authorized")
        next({
          path: "auth",
          query: {
            redirect: to.fullPath
          }
        })
      })
  }
  next()
})
