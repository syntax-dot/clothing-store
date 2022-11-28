
export function EmailValidator(email: string): boolean {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  if (expression.test(email) && email.length > 6)
    return true

  return false
}
