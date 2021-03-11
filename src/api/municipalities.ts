const ENDPOINT = 'https://stage.buergermeldungen.com/graphql';

export async function getMunicipalities() {
  const response = await fetchData(municipalitiesQuery);
  const responseBody = await response.json();
  return responseBody.data.municipalities.data;
}

async function fetchData(query: string) {
  return await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: query })
  });
}

const municipalitiesQuery = `{
  municipalities(count: 100) {
    data {
      id,
      name,
      country,
      state,
      district,
      location {
        latitude,
        longitude
      }
    }
  }
}`;