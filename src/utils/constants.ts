export enum AppRoutes {
  Login = '/login',
  Employees = '/dashboard/employees',
  Weak = '/items/weak',
  Reused = '/items/reused',
  Old = '/items/old',
  Root = '/',
  NoMatch = '*'
}

export enum API {
  Login = '/admin/auth',
  Logout = '/admin/logout',
  Refresh = '/admin/refresh',
  Employee = '/api/id',
  Employees = '/api/ids',
  DeleteEmployee = '/api/delete',
  UpdateEmployee = '/api/update',
  RegisterEmployee = '/api/register'
}

export const AxiosConfig = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
}

/*
 * Username requirements:
 * must start with a lowercase or uppercase letter
 * followed by 3 to 23 characters that may letters, numbers, underscores, or hyphens
 */
export const REGEX_Username = /^[A-z][A-z0-9-_]{3,23}$/

/*
 * Password requirements:
 * must start with a lowercase or uppercase letter
 * followed by 3 to 23 characters that may letters, numbers, underscores, or hyphens
 */
export const REGEX_Password = /^[A-z][A-z0-9-_]{3,23}$/

/*
 * Email address requirements:
 */
export const REGEX_EmailAddress =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

