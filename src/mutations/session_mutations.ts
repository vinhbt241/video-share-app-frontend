import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login } from "../requests/session_requests"
import { ISessionCredentials } from "../types/session"
import { useToast } from "@chakra-ui/react"

export function useLoginMutation() {
  const queryClient = useQueryClient()
  const toast = useToast()

  return useMutation({
    mutationFn: (data: ISessionCredentials) => login(data),
    onError: () => {
      toast({
        title: "Error!",
        description: "Oops, something went wrong...",
        status: "error",
        duration: 10000,
        isClosable: true,
      })
    },
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
