import { useDeferredValue, useTransition, type FormEvent } from "react";
import { gql, useReadQuery, useSuspenseQuery } from "@apollo/client";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { equal } from "@wry/equality";

const GET_LANGUAGE = gql`
  query Language($code: ID!) {
    language(code: $code) {
      code
      name
    }
  }
`;

type RouteSearch = { code: string };
type Result = { language: { name: string } | null };
type Variables = { code: string };

export const Route = createFileRoute("/_layout/suspense")({
  component: RouteComponent,
  errorComponent: ErrorComponent,
  pendingComponent: PendingComponent,
  // **************************⚠️ Tanstack Router issue ⚠️**********************
  // This seems to only work on initial load and not on subsequent suspensions
  pendingMinMs: 3000,
  pendingMs: 0,
  // **************************************************************************
  validateSearch: (search): RouteSearch => {
    return {
      code: (search.code as string | undefined) || "en",
    };
  },
  loaderDeps: ({ search }) => ({
    code: search.code,
  }),
  loader: async ({ context, deps }) => {
    return {
      queryRef: context.preloadQuery<Result, Variables>(GET_LANGUAGE, {
        variables: { code: deps.code },
        fetchPolicy: "network-only",
      }),
    };
  },
});

function RouteComponent() {
  const search = Route.useSearch();
  const { queryRef } = Route.useLoaderData();
  const deferredQueryRef = useDeferredValue(queryRef);
  const { data } = useReadQuery(deferredQueryRef);
  // const [isPending, startTransition] = useTransition();
  const isPending = !equal(queryRef, deferredQueryRef);
  const navigate = useNavigate({ from: Route.fullPath });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const code = data.get("code") as string;

    if (code.length !== 2) return;

    /**
     * --------------------------- ⚠️ Apollo issue ⚠️ --------------------------
     * Using `startTransition` should stop React from showing Suspense fallback
     * but it doesn't. It seems that transitions are not well supported in
     * Tanstack Router, so instead of wrapping the `navigate` call in
     * `startTransition`, we should rely on `useDeferredValue` by deferring the
     * `queryRef` to stop React from showing the Suspense fallback, but with
     * that approach we lose the pending status...
     */
    // startTransition(() => {
    navigate({
      search: { code: data.get("code") as string },
      replace: true,
    });
    // });
    // ------------------------------------------------------------------------
  }

  console.log("isPending", isPending);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <h1>Find language</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "8px",
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "8px",
          }}
        >
          <span>Enter a language code (e.g. en, ja, fi, sv)</span>
          <input type="text" name="code" defaultValue={search.code} />
        </label>

        <button type="submit">Search</button>
      </form>

      <div>
        {isPending ? (
          <p>Pending...</p>
        ) : data.language ? (
          <h2>{data.language.name}</h2>
        ) : (
          <div>No language found</div>
        )}
      </div>
    </div>
  );
}

function ErrorComponent() {
  return <div style={{ padding: 100, background: "red" }}>Error</div>;
}

function PendingComponent() {
  return (
    <div style={{ padding: 100, background: "lightblue" }}>Loading...</div>
  );
}
