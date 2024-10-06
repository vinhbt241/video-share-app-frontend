import { UseMutationResult } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

interface IUseRedirectAfterSuccessMutationProps<T, U> {
  mutation: UseMutationResult<T, Error, U, unknown>
  navigateTo: string
}

export const useRedirectAfterSuccessMutation = <T, U>({
  mutation,
  navigateTo,
}: IUseRedirectAfterSuccessMutationProps<T, U>) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (mutation.isSuccess && !!navigateTo) {
      navigate({ to: navigateTo })
    }
  }, [mutation.isSuccess, navigate, navigateTo])

  return mutation.mutateAsync
}
