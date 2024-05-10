const emailRegExp = RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]")

const emailValidator = (email: string): boolean => {
  return emailRegExp.test(email)
}

export default emailValidator
