import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
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
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
