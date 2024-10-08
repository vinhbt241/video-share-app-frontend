/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as AuthIndexImport } from './routes/_auth/index'
import { Route as AuthNewVideoIndexImport } from './routes/_auth/new-video/index'
import { Route as AuthHomeIndexImport } from './routes/_auth/home/index'

// Create/Update Routes

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  path: '/',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthNewVideoIndexRoute = AuthNewVideoIndexImport.update({
  path: '/new-video/',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthHomeIndexRoute = AuthHomeIndexImport.update({
  path: '/home/',
  getParentRoute: () => AuthRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_auth/': {
      id: '/_auth/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/home/': {
      id: '/_auth/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AuthHomeIndexImport
      parentRoute: typeof AuthRouteImport
    }
    '/_auth/new-video/': {
      id: '/_auth/new-video/'
      path: '/new-video'
      fullPath: '/new-video'
      preLoaderRoute: typeof AuthNewVideoIndexImport
      parentRoute: typeof AuthRouteImport
    }
  }
}

// Create and export the route tree

interface AuthRouteRouteChildren {
  AuthIndexRoute: typeof AuthIndexRoute
  AuthHomeIndexRoute: typeof AuthHomeIndexRoute
  AuthNewVideoIndexRoute: typeof AuthNewVideoIndexRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthIndexRoute: AuthIndexRoute,
  AuthHomeIndexRoute: AuthHomeIndexRoute,
  AuthNewVideoIndexRoute: AuthNewVideoIndexRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthRouteRouteWithChildren
  '/': typeof AuthIndexRoute
  '/home': typeof AuthHomeIndexRoute
  '/new-video': typeof AuthNewVideoIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof AuthIndexRoute
  '/home': typeof AuthHomeIndexRoute
  '/new-video': typeof AuthNewVideoIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth': typeof AuthRouteRouteWithChildren
  '/_auth/': typeof AuthIndexRoute
  '/_auth/home/': typeof AuthHomeIndexRoute
  '/_auth/new-video/': typeof AuthNewVideoIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/' | '/home' | '/new-video'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/home' | '/new-video'
  id: '__root__' | '/_auth' | '/_auth/' | '/_auth/home/' | '/_auth/new-video/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthRouteRoute: AuthRouteRouteWithChildren,
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
        "/_auth"
      ]
    },
    "/_auth": {
      "filePath": "_auth/route.tsx",
      "children": [
        "/_auth/",
        "/_auth/home/",
        "/_auth/new-video/"
      ]
    },
    "/_auth/": {
      "filePath": "_auth/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/home/": {
      "filePath": "_auth/home/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/new-video/": {
      "filePath": "_auth/new-video/index.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
