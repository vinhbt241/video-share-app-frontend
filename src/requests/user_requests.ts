import Api from "../api"
import { IUserCredentials } from "../types/user"

export async function createUser(data: IUserCredentials) {
  const response = await Api.post("users", data)

  return response.data
}

export async function getCurrentUser() {
  const response = await Api.get("users/me").catch(() => {
    return null
  })

  return response?.data || null
}
