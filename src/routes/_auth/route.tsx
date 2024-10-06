import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"

import type { JSX } from "react"

function AuthLayout(): JSX.Element {
  return (
    <>
      <Outlet />
    </>
  )
}

export const Route = createFileRoute("/_auth")({
  component: AuthLayout,
  beforeLoad({ context, location }) {
    if (!context.currentUser) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      })
    }
  },
})
