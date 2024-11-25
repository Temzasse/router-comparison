import { gql, useReadQuery } from "@apollo/client";
import { createFileRoute, Link } from "@tanstack/react-router";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
    }
  }
`;

type Country = {
  code: string;
  name: string;
};

export const Route = createFileRoute("/_layout/countries")({
  component: CountryListComponent,
  errorComponent: () => <div>Error</div>,
  pendingComponent: () => <div>Loading...</div>,
  loader: async ({ context }) => {
    return {
      queryRef: context.preloadQuery<{ countries: Country[] }>(GET_COUNTRIES),
    };
  },
});

function CountryListComponent() {
  const { queryRef } = Route.useLoaderData();
  const { data } = useReadQuery(queryRef);
  const countries = data.countries;

  return (
    <div>
      <h3>Countries</h3>

      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            <Link to="/countries/$id" params={{ id: country.code }}>
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
