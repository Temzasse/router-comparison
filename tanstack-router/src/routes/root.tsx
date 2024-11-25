import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type {
  ApolloClient,
  NormalizedCacheObject,
  PreloadQueryFunction,
} from "@apollo/client";

type RouterContext = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  preloadQuery: PreloadQueryFunction;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div>
        <Link
          to="/"
          activeProps={{ className: "font-bold" }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link to="/about" activeProps={{ className: "font-bold" }}>
          About
        </Link>
        <Link to="/countries" activeProps={{ className: "font-bold" }}>
          Countries
        </Link>
      </div>

      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
