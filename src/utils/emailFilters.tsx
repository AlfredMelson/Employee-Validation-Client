import { IEmployee } from '../services/getEmployees'

export const emplInvalidEmail = (employees: Array<IEmployee>) => {
  const validEmail = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )

  const invalid = employees.filter(empl => !empl.email.match(validEmail))
  return invalid
}

// validate an email address and return the valid email without regex

export const emplOldEmail = (employees: Array<IEmployee>) => {
  const today = new Date().getTime()
  const moreThanThirty = employees.filter(
    empl => today - Date.parse(empl.createdAt) >= 30 * 24 * 3600 * 1000
  )
  return moreThanThirty
}

// TESTING
export const emplOldEmail2 = (empl: IEmployee) => {
  const currentDate = new Date()
  const creationDate = new Date(empl.createdAt)
  const differenceInDates = {
    inDays: (d1: Date, d2: Date) => (d2.getTime() - d1.getTime()) / (24 * 3600 * 1000)
  }

  return differenceInDates.inDays(creationDate, currentDate) > 30
}
export const emplOldEmail3 = (empl: IEmployee) => {
  const currentDate = new Date()
  const creationDate = new Date(empl.createdAt)
  const differenceInDates = {
    inDays: (d1: Date, d2: Date) => (d2.getTime() - d1.getTime()) / (24 * 3600 * 1000)
  }

  return differenceInDates.inDays(creationDate, currentDate) > 30

  // const moreThanThirty = employees.filter(
  //   empl => today - Date.parse(empl.createdAt) >= 30 * 24 * 3600 * 1000
  // )
}

export const emplReusedEmail = (empl: IEmployee, employees: Array<IEmployee>) => {
  // check if any emails are the same
  const emailAlreadyTaken: boolean = employees.some(
    (value: IEmployee) => value.email === empl.email
  )

  return emailAlreadyTaken && employees.filter(empl => empl.email === empl.email)
}
