import { createRouter, RouterProvider } from "@tanstack/react-router"
import type { JSX } from "react"
import { routeTree } from "./routeTree.gen"

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
})

export function App(): JSX.Element {
  return <RouterProvider router={router} />
}
