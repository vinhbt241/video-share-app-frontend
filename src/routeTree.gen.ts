/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as AuthIndexImport } from './routes/_auth/index'

// Create/Update Routes

const HomeIndexRoute = HomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth/': {
      id: '/_auth/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof AuthIndexRoute
  '/home': typeof HomeIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof AuthIndexRoute
  '/home': typeof HomeIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth/': typeof AuthIndexRoute
  '/home/': typeof HomeIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/home'
  id: '__root__' | '/_auth/' | '/home/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthIndexRoute: typeof AuthIndexRoute
  HomeIndexRoute: typeof HomeIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthIndexRoute: AuthIndexRoute,
  HomeIndexRoute: HomeIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth/",
        "/home/"
      ]
    },
    "/_auth/": {
      "filePath": "_auth/index.ts"
    },
    "/home/": {
      "filePath": "home/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
