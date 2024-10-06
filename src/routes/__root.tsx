import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router"
import type { JSX } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

interface IRouterContextProps {
  currentUser: {
    email: string
  } | null
}

function Root(): JSX.Element {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  )
}

export const Route = createRootRouteWithContext<IRouterContextProps>()({
  component: Root,
})
