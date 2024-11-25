import { queryOptions, useQuery } from "@tanstack/react-query";

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useCharactersQuery() {
  const query = useQuery({
    queryKey: ["characters"],
    queryFn: ({ signal }) => fetchStarWarsCharacter({ signal }),
  });
}

const planetsQuery = queryOptions({
  queryKey: ["planets"],
  queryFn: ({ signal }) => fetchStarWarsCharacter({ signal }),
});

export function usePlanetsQuery() {
  const query = useQuery(planetsQuery);
}

async function fetchStarWarsEntity({
  entity,
  params: _params,
  signal,
}: {
  entity: string;
  params?: string;
  signal?: AbortSignal;
}) {
  await sleep(500); // add a bit extra delay

  const params = _params ? `?${_params}` : "";
  const result = await fetch(`https://swapi.dev/api/${entity}${params}`, {
    signal,
  })
    .then((res) => res.json())
    .then((data) => data.results as { name: string; url: string }[]);

  return result.map((item) => ({
    id: item.url,
    name: item.name,
  }));
}

async function fetchStarWarsCharacter({ signal }: { signal?: AbortSignal }) {
  return fetchStarWarsEntity({ signal, entity: "people" });
}

async function fetchStarWarsPlanets({ signal }: { signal?: AbortSignal }) {
  return fetchStarWarsEntity({ signal, entity: "planets" });
}
