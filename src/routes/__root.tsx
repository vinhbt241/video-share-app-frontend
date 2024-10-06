import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router"
import type { JSX } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

interface IRouterContext {
  isAuthenticated: boolean
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

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: Root,
})
