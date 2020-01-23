import dayjs from "dayjs"

export const getNowTime = (format: string = "YYYY-MM-DD HH:mm:ss") => {
  return dayjs().format(format)
}

export const getPastTime = (
  format: string = "YYYY-MM-DD HH:mm:ss",
  subtractValue: number = 24
) => {
  return dayjs()
    .subtract(subtractValue, "h")
    .format(format)
}
