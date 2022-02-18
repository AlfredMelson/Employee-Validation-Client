enum Roles {
  read = 'read',
  write = 'write',
  admin = 'admin'
}

export default interface IEmployeeType {
  id: string
  name: string
  role: Roles
  email: string
  createdAt: string
}
