export type AppComponentState = {
  hiddenToolbarItems: boolean
  overlay: boolean
}

export type HomeComponentState = {
  tableHeaders: TableHeaders[]
  tableOptions: TableOptions
  tableItems: Array<{ name: string; age: number; gender: "Male" | "Female" }>
}

export type AuthComponentState = {
  signinForm:
    | "signin"
    | "signup"
    | "resetPassword"
    | "submitCode"
    | "authenticationCode"
  errorMessages: string[]
  userName: string
  password: string
  signupParam: SignUpParam
  resetPasswordParam: ResetPasswordParam
  authenticationCode: string
}

export type SignUpParam = {
  mailAddress: string
  userName: string
  password: string
}

export type ResetPasswordParam = {
  userName: string
  password: string
  code: string
}

export type TableHeaders = {
  text: string
  value: string
  sortable?: boolean
}

export type TableOptions = {
  page: number
  sortBy: string[]
  sortDesc: boolean[]
}

export type SelectItems = {
  text: string | number
  value: string | number
}
