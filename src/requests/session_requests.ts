import Api from "../api"
import { ISessionCredentials } from "../types/session"

export async function login(data: ISessionCredentials) {
  const response = await Api.post("sessions", data)

  return response.data
}
