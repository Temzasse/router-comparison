import { gql, useReadQuery } from "@apollo/client";
import { createFileRoute, Link } from "@tanstack/react-router";

const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      code
      name
    }
  }
`;

type Country = {
  code: string;
  name: string;
};

type RouteSearch = {
  country?: string;
};

export const Route = createFileRoute("/_layout/countries_/$id")({
  component: CountryDetailsComponent,
  pendingComponent: () => <div>Loading...</div>,
  validateSearch: (search): RouteSearch => {
    return {
      country: search.country as string | undefined,
    };
  },
  loaderDeps: ({ search }) => ({
    country: search.country,
  }),
  loader: async ({ context, params, deps: { country } }) => {
    const code = country || params.id;

    return {
      queryRef: context.preloadQuery<{ country: Country }>(GET_COUNTRY, {
        variables: { code },
      }),
    };
  },
});

function CountryDetailsComponent() {
  const { queryRef } = Route.useLoaderData();
  const { data } = useReadQuery(queryRef);
  const country = data.country;

  return (
    <div>
      <h3>Country {country.name}</h3>
      <Link to="." search={{ country: "FI" }}>
        Search
      </Link>
    </div>
  );
}
