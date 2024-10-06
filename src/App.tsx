import { createRouter, RouterProvider } from "@tanstack/react-router"
import type { JSX } from "react"
import { routeTree } from "./routeTree.gen"
import { useCurrentUserQuery } from "./queries/user_queries"

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  context: {
    currentUser: null,
  },
})

export function App(): JSX.Element {
  const currentUserQuery = useCurrentUserQuery()
  const currentUser = currentUserQuery.data

  if (currentUserQuery.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <RouterProvider
      router={router}
      context={{
        currentUser,
      }}
    />
  )
}
