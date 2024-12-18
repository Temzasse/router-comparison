/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/root'
import { Route as layoutImport } from './routes/layout'
import { Route as suspenseIssueImport } from './routes/suspense-issue'
import { Route as profileImport } from './routes/profile'
import { Route as aboutImport } from './routes/about'
import { Route as indexImport } from './routes/index'
import { Route as countryListCountryListrouteImport } from './routes/country-list/country-list.route'
import { Route as countryDetailsCountryDetailsrouteImport } from './routes/country-details/country-details.route'

// Create/Update Routes

const layoutRoute = layoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const suspenseIssueRoute = suspenseIssueImport.update({
  id: '/suspense',
  path: '/suspense',
  getParentRoute: () => layoutRoute,
} as any)

const profileRoute = profileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => layoutRoute,
} as any)

const aboutRoute = aboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => layoutRoute,
} as any)

const indexRoute = indexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => layoutRoute,
} as any)

const countryListCountryListrouteRoute =
  countryListCountryListrouteImport.update({
    id: '/countries',
    path: '/countries',
    getParentRoute: () => layoutRoute,
  } as any)

const countryDetailsCountryDetailsrouteRoute =
  countryDetailsCountryDetailsrouteImport.update({
    id: '/countries_/$id',
    path: '/countries/$id',
    getParentRoute: () => layoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/countries': {
      id: '/_layout/countries'
      path: '/countries'
      fullPath: '/countries'
      preLoaderRoute: typeof countryListCountryListrouteImport
      parentRoute: typeof layoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof indexImport
      parentRoute: typeof layoutImport
    }
    '/_layout/about': {
      id: '/_layout/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof aboutImport
      parentRoute: typeof layoutImport
    }
    '/_layout/profile': {
      id: '/_layout/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof profileImport
      parentRoute: typeof layoutImport
    }
    '/_layout/suspense': {
      id: '/_layout/suspense'
      path: '/suspense'
      fullPath: '/suspense'
      preLoaderRoute: typeof suspenseIssueImport
      parentRoute: typeof layoutImport
    }
    '/_layout/countries_/$id': {
      id: '/_layout/countries_/$id'
      path: '/countries/$id'
      fullPath: '/countries/$id'
      preLoaderRoute: typeof countryDetailsCountryDetailsrouteImport
      parentRoute: typeof layoutImport
    }
  }
}

// Create and export the route tree

interface layoutRouteChildren {
  countryListCountryListrouteRoute: typeof countryListCountryListrouteRoute
  indexRoute: typeof indexRoute
  aboutRoute: typeof aboutRoute
  profileRoute: typeof profileRoute
  suspenseIssueRoute: typeof suspenseIssueRoute
  countryDetailsCountryDetailsrouteRoute: typeof countryDetailsCountryDetailsrouteRoute
}

const layoutRouteChildren: layoutRouteChildren = {
  countryListCountryListrouteRoute: countryListCountryListrouteRoute,
  indexRoute: indexRoute,
  aboutRoute: aboutRoute,
  profileRoute: profileRoute,
  suspenseIssueRoute: suspenseIssueRoute,
  countryDetailsCountryDetailsrouteRoute:
    countryDetailsCountryDetailsrouteRoute,
}

const layoutRouteWithChildren =
  layoutRoute._addFileChildren(layoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof layoutRouteWithChildren
  '/countries': typeof countryListCountryListrouteRoute
  '/': typeof indexRoute
  '/about': typeof aboutRoute
  '/profile': typeof profileRoute
  '/suspense': typeof suspenseIssueRoute
  '/countries/$id': typeof countryDetailsCountryDetailsrouteRoute
}

export interface FileRoutesByTo {
  '/countries': typeof countryListCountryListrouteRoute
  '/': typeof indexRoute
  '/about': typeof aboutRoute
  '/profile': typeof profileRoute
  '/suspense': typeof suspenseIssueRoute
  '/countries/$id': typeof countryDetailsCountryDetailsrouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof layoutRouteWithChildren
  '/_layout/countries': typeof countryListCountryListrouteRoute
  '/_layout/': typeof indexRoute
  '/_layout/about': typeof aboutRoute
  '/_layout/profile': typeof profileRoute
  '/_layout/suspense': typeof suspenseIssueRoute
  '/_layout/countries_/$id': typeof countryDetailsCountryDetailsrouteRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/countries'
    | '/'
    | '/about'
    | '/profile'
    | '/suspense'
    | '/countries/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/countries'
    | '/'
    | '/about'
    | '/profile'
    | '/suspense'
    | '/countries/$id'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/countries'
    | '/_layout/'
    | '/_layout/about'
    | '/_layout/profile'
    | '/_layout/suspense'
    | '/_layout/countries_/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  layoutRoute: typeof layoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  layoutRoute: layoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "layout.tsx",
      "children": [
        "/_layout/countries",
        "/_layout/",
        "/_layout/about",
        "/_layout/profile",
        "/_layout/suspense",
        "/_layout/countries_/$id"
      ]
    },
    "/_layout/countries": {
      "filePath": "country-list/country-list.route.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "index.tsx",
      "parent": "/_layout"
    },
    "/_layout/about": {
      "filePath": "about.tsx",
      "parent": "/_layout"
    },
    "/_layout/profile": {
      "filePath": "profile.tsx",
      "parent": "/_layout"
    },
    "/_layout/suspense": {
      "filePath": "suspense-issue.tsx",
      "parent": "/_layout"
    },
    "/_layout/countries_/$id": {
      "filePath": "country-details/country-details.route.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
