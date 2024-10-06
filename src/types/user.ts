export interface IUserCredentials {
  user: {
    email: string
    password: string
  }
}

export interface ICurrentUser {
  email: string
  id: string
}
