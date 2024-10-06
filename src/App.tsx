import { createRouter, RouterProvider } from "@tanstack/react-router"
import type { JSX } from "react"
import { routeTree } from "./routeTree.gen"
import { useCurrentUserQuery } from "./queries/user_queries"

const router = createRouter({
  routeTree,
  context: {
    isAuthenticated: false,
  },
})

export function App(): JSX.Element {
  const currentUserQuery = useCurrentUserQuery()
  const currentUser = currentUserQuery.data

  return (
    <RouterProvider
      router={router}
      context={{
        isAuthenticated: !currentUserQuery.isLoading && !!currentUser,
      }}
    />
  )
}
