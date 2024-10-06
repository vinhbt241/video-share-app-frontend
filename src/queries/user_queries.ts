import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../requests/user_requests"

export function useCurrentUserQuery() {
  return useQuery({
    queryKey: ["current_user"],
    queryFn: getCurrentUser,
  })
}
