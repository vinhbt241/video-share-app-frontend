import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IUserCredentials } from "../types/user"
import { createUser } from "../requests/user_requests"

export function useCreateUserMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: IUserCredentials) => createUser(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token)
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
