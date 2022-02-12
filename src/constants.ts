export enum DefinedRouting {
  Login = '/login',
  Users = '/items',
  Weak = '/items/weak',
  Reused = '/items/reused',
  Old = '/items/old',
  Root = '/',
  NoMatch = '*'
}

export enum API {
  Login = '/auth',
  Logout = '/logout',
  Items = '/items',
  Refresh = '/refresh',
  Register = '/register', // used for testing
  User = '/user'
}

export enum LOCAL {
  User = 'mygomtechUser',
  Persist = 'mygomtechPersist'
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
