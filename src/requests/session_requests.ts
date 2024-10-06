import Api from "../api"
import { ISessionCredentials } from "../types/session"

export async function login(data: ISessionCredentials) {
  let response = await Api.post("sessions", data).catch(
    (error) => error.response
  )

  if (response.status == 404) {
    console.log("here")
    response = await Api.post("users", {
      user: {
        ...data.session,
      },
    })
  }

  return response.data
}
