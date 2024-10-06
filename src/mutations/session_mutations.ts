import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "../requests/session_requests"
import { ISessionCredentials } from "../types/session"

export function useLoginMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: ISessionCredentials) => login(data),
    onSuccess: async (data) => {
      localStorage.setItem("token", data.jwt_token)
      window.location.reload()
      await queryClient.invalidateQueries({ queryKey: ["current_user"] })
    },
  })
}

export function useLogoutMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem("token")
      window.location.reload()
      await queryClient.invalidateQueries({ queryKey: ["current_user"] })
    },
  })
}
