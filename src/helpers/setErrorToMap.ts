export const toErrorMap = (errors: any[]) => {
  const errorMap: { [key: string]: string } = {}
  errors.forEach((errMessage: string) => {
    let key = errMessage.toString().split(' ')[0]
    let message = errMessage.split(' ') //arr
    message.shift()
    errorMap[key] = message?.join(' ')
  })
  return errorMap
}
