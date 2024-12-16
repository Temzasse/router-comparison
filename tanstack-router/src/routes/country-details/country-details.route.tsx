import { gql, useReadQuery } from "@apollo/client";
import { createFileRoute } from "@tanstack/react-router";

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

export const Route = createFileRoute("/_layout/countries_/$id")({
  component: CountryDetailsComponent,
  pendingComponent: () => <div>Loading...</div>,
  loader: async ({ context, params }) => {
    const code = params.id;

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
    </div>
  );
}
