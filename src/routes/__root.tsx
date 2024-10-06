import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import type { JSX } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function Root(): JSX.Element {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  )
}

export const Route = createRootRoute({
  component: Root,
})
