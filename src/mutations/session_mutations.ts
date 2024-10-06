import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "../requests/session_requests"
import { ISessionCredentials } from "../types/session"

export function useLoginMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: ISessionCredentials) => login(data),
    onSuccess: (data) => {
      console.log(data)
      localStorage.setItem("token", data.jwt_token)
    },
    onError: () => {
      console.log("error")
    },
    onSettled: async (_, error) => {
      console.log("settled")
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({ queryKey: ["current_user"] })
      }
    },
  })
}
